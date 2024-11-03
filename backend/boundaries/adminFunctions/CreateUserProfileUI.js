import CreateUserProfileController from "../../controllers/adminFunctions/CreateUserProfileController.js"; 
import Boundary from "../UseCaseBoundary.js"

class CreateUserProfileUI extends Boundary { 
    onSubmit() {
        // console.log("Submit button clicked!");
        var submitState = true;
        var errorMsg = ""; 

        try {   
            var role = document.getElementById("role").value.toLower();
            if (role.length <= 0) {// no text entered
                submitState = false;
                throw "ERROR: role name cannot be empty";
            } 
            var roleDesc = document.getElementById("roleDesc").value; 
            var controller = new CreateUserProfileController();
            submitState = controller.submitUserProfile(role, roleDesc); 
        } catch (err) {
            console.error(err); 
            errorMsg = err;
        }
        if (submitState) { // successful creation
            this.displaySuccess("A new profile has been successfully created!", "resultMsg");
        } else {
            this.displayError(errorMsg, "resultMsg");
        } 
    }
}

const createUserProfileUI = new CreateUserProfileUI();
document.getElementById("submit").addEventListener("click", () => {
    createUserProfileUI.onSubmit();
}); 
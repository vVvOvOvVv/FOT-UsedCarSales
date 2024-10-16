import UserProfile from "../entities/UserProfile.js";
import CreateUserProfileController from "../controllers/CreateUserProfileController.js"; 
import Boundary from "./UseCaseBoundary.js"

class CreateUserProfileUI extends Boundary { 
    onSubmit() {
        console.log("Submit button clicked!");
        var role = document.getElementById("role").value;
        var roleDesc = document.getElementById("roleDesc").value;
        var errorMsg = ""; 

        try { 
            var p = new UserProfile(role, roleDesc);
            var controller = new CreateUserProfileController();
            var submitState = controller.submitUserProfile(p);
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
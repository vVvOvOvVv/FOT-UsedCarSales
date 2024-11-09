import CreateUserProfileController from "../../controllers/adminFunctions/CreateUserProfileController.js"; 
import Boundary from "../UseCaseBoundary.js"

class CreateUserProfileUI extends Boundary { 
    onSubmit() {
        // console.log("Submit button clicked!");
        var submitState = true;

        try {   
            var role = document.getElementById("role").value.toLowerCase();
            if (role == "" | role == null) // no text entered
                throw "Role name cannot be empty";
            var roleDesc = document.getElementById("roleDesc").value;
            if (roleDesc == "" | roleDesc == null) // no text entered
                throw "Role description cannot be empty";
            var controller = new CreateUserProfileController();
            submitState = controller.submitUserProfile(role, roleDesc); 
        } catch (err) {
            submitState = false;
            this.displayError(err);
        }
        if (submitState) { // successful creation
            this.displaySuccess();
        }
    }
}

const createUserProfileUI = new CreateUserProfileUI();
document.getElementById("submit").addEventListener("click", () => {
    createUserProfileUI.onSubmit();
}); 
import UserProfile from "../entities/UserProfile.js";
import CreateUserProfileController from "../controllers/CreateUserProfileController.js"; 
import Boundary from "./UseCaseBoundary.js"

class CreateUserProfileUI extends Boundary {
    onSubmit() {
        console.log("Submit button clicked!");
        var displayName = document.getElementById("displayName").value;
        var location = document.getElementById("location").value;
        var role = document.getElementById("role").value; 
        var phone = document.getElementById("phone").value; 
        var email = document.getElementById("email").value; 

        var p = new UserProfile(displayName, location, role, phone, email);

        var submitState = CreateUserProfileController.submitUserProfile(p);
        if (submitState) { // successful creation
            this.displaySuccess("A new profile has been successfully created!", "resultMsg");
        } else {
            this.displayError("A issue has occurred. Unable to create profile", "resultMsg");
        } 
    }
}

const createUserProfileUI = new CreateUserProfileUI();
document.getElementById("submit").addEventListener("click", () => {
    createUserProfileUI.onSubmit();
}); 
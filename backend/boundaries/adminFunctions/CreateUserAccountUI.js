import SubmitUserAccountController from "../../controllers/adminFunctions/SubmitUserAccountController.js"; 
import Boundary from "../UseCaseBoundary.js"

class CreateUserAccountUI extends Boundary {
    onSubmit() {
        try {   
            var submitState = false;
            var profile = document.getElementById("profile").value;
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var pass = document.getElementById("password").value;
            
            // error message
            if (profile == "" | profile == null)
                throw "Profile cannot be empty"
            if (profile < 0 | profile > 3)
                throw "Invalid profile entered";
            if (name == "" | name == null)
                throw "Name cannot be empty"
            if (email == "" | email == null)
                throw "Email cannot be empty"
            var hasAtSign = false;
            for (var i = 0; i < email.toString().length; i++) {
                if (email.toString()[i] == "@") {
                    hasAtSign = true;
                    break;
                }
            }
            if (!hasAtSign)
                throw "Invalid email entered";
            if (pass == "" | pass == null)
                throw "Password cannot be empty"
            // attempt to write to JSON
            var controller = new SubmitUserAccountController();
            submitState = controller.submitUserAccount(name, email, pass);
        } catch (err) { // errors from the controller or entity
            submitState = false;
            this.displayError(err);
        }
         if (submitState) // successful creation
             this.displaySuccess();
    }
} export default CreateUserAccountUI;
var createUI = new CreateUserAccountUI;
document.getElementById("submit").addEventListener("click", () => {
    createUI.onSubmit();
});
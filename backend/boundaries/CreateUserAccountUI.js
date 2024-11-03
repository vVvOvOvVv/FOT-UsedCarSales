import SubmitUserAccountController from "../controllers/SubmitUserAccountController.js"; 
import Boundary from "./UseCaseBoundary.js"

class CreateUserAccountUI extends Boundary {
    onSubmit() {
        console.log("Submit button clicked!");
        var submitState = true;
        var errorMsg = ""; 
        var passErr = false;
        var passConfirmErr = false;

        try {   
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var pass = document.getElementById("pass").value;
            var passConfirm = document.getElementById("confirm pass").value;
            
            // error message
            if (name == "" | name == null) {
                submitState = false;
                errorMsg = "Information entered is invalid, please try again"
            }
            if (email == "" | email == null) {
                submitState = false;
                errorMsg = "Information entered is invalid, please try again"
            }
            if (pass == "" | pass == null) {
                submitState = false;
                passErr = true;
                errorMsg = "Information entered is invalid, please try again"
            }
            if (passConfirm == "" | passConfirm == null) {
                submitState = false;
                passConfirmErr = true;
                errorMsg = "Information entered is invalid, please try again"
            }
            if (!passErr & !passConfirmErr & pass != passConfirm) {// mismatch between password and confirmation
                submitState = false;
                if (errorMsg != "") // already has an error
                    errorMsg += "\n";
                errorMsg += "Password and confirmation do not match"
            }

            // attempt to add to JSON
            if (submitState) { // no errors in data entries
                var controller = new SubmitUserAccountController();
                submitState = controller.submitUserAccount(name, email, pass);
            }
        } catch (err) { // errors from the controller or entity
            console.error(err); 
            errorMsg = err;
        }
        if (submitState) { // successful creation
            this.displaySuccess(name + "\'s account has been successfully created!", "resultMsg");
        } else {
            this.displayError(errorMsg, "resultMsg");
        } 
    }
}

const createUserAccountUI = new CreateUserAccountUI();
document.getElementById("submit").addEventListener("click", () => {
    createUserAccountUI.onSubmit();
}); 
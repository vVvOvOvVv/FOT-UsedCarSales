import LoginUserController from "../../controllers/adminFunctions/LoginUserController.js"
import Boundary from "../UseCaseBoundary.js"

class LoginUserUI extends Boundary {
    onLogin() {
        var email = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        var successFlag = true;

        try {
            if (email == "")
                throw "Email cannot be left empty";
            var containsAtSign = false;
            for (var i = 0; i < email.toString().length; i++) {
                if (email.toString()[i] == "@") {
                    containsAtSign = true;
                    break;
                }
            }
            if (!containsAtSign)
                throw "Invalid email entered";
            if (pass == "")
                throw "Password cannot be left empty";

            var controller = new LoginUserController();
            successFlag = controller.signIn(email, pass);
        } catch (err) {
            successFlag = false;
            this.displayError(err);
        }

        if (successFlag) {
            this.displaySuccess();
            window.open("../../../frontend/User Admin/AdminHomePage.html", "_self");
        }
    }
} export default LoginUserUI;

const loginUI = new LoginUserUI();
document.getElementById("button").addEventListener("click", () => {
    loginUI.onLogin();
});
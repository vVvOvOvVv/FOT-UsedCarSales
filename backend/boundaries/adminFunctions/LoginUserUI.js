import LoginUserController from "../../controllers/adminFunctions/LoginUserController.js"
import Boundary from "../UseCaseBoundary.js"
var homepagePath = ""; // replace with homepage link

class LoginUserUI extends Boundary {
    onLogin() {
        var email = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        var successFlag = true;
        var resultMsg = "";

        try {
            if (email == "")
                throw "Email cannot be left empty";
            if (pass == "")
                throw "Password cannot be left empty";

            var controller = new LoginUserController();
            successFlag = controller.signIn(email, pass);
        } catch (err) {
            successFlag = false;
            resultMsg = err;
        }

        if (successFlag)
            this.displaySuccess("Logged in!", "resultMsg");
        else
            this.displayError(resultMsg, "resultMsg");
    }

    displaySuccess(successMsgString, successElementId) {
        super.displaySuccess(successMsgString + "......Redirecting to homepage", successElementId);
        if (homepagePath != "")
            window.open(homepagePath,"_self")
        else
            console.error("File path the homepage not set"); // debugging line
    }
}

const loginUI = new LoginUserUI();
document.getElementById("login").addEventListener("click", () => {
    loginUI.onLogin();
}); 
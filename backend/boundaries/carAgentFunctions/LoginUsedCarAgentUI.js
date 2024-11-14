import LoginUsedCarAgentController from "../../controllers/carAgentFunctions/LoginUsedCarAgentController.js";
import Boundary from "../UseCaseBoundary.js";

class LoginUsedCarAgentUI extends Boundary {
    onLogin() {
        try {
            var email = document.getElementById("email").value;
            var pass = document.getElementById("pass").value;
            var successFlag = true;
            if (email == "")
                throw "Email cannot be left empty";
            if (pass == "")
                throw "Password cannot be left empty";

            var controller = new LoginUsedCarAgentController();
            successFlag = controller.UCALogin(email, pass);
        } catch (err) {
            successFlag = false;
            this.displayError(err);
        }

        if (successFlag) {
            this.displaySuccess();
            window.open("../../../frontend/Used Car Agent/AgentHomePage.html", "_self");
        }
    }
}

var loginUI = new LoginUsedCarAgentUI();
document.getElementById("button").addEventListener("click", () => {
    loginUI.onLogin();
}); 
import LoginBuyerController from "../../controllers/buyerFunctions/LoginBuyerController.js";
import Boundary from "../UseCaseBoundary.js";

class LoginBuyerUI extends Boundary {
    onLogin() {
        try {
            var email = document.getElementById("email").value;
            var pass = document.getElementById("pass").value;
            var successFlag = true;
            if (email == "")
                throw "Email cannot be left empty";
            if (pass == "")
                throw "Password cannot be left empty";

            var controller = new LoginBuyerController();
            successFlag = controller.loginBuyer(email, pass);
        } catch (err) {
            successFlag = false;
            this.displayError(err);
        }

        if (successFlag) {
            this.displaySuccess();
            window.open("../../../frontend/Buyer/Buyer.html", "_self");
        }
    }
}

var loginUI = new LoginBuyerUI();
document.getElementById("button").addEventListener("click", () => {
    loginUI.onLogin();
}); 
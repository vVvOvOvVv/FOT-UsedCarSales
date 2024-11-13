import LoginSellerController from "../../controllers/sellerFunctions/LoginSellerController.js";
import Boundary from "../UseCaseBoundary.js";

class LoginSellerUI extends Boundary {
    onLogin() {
        try {
            var email = document.getElementById("email").value;
            var pass = document.getElementById("pass").value;
            var successFlag = true;
            if (email == "")
                throw "Email cannot be left empty";
            if (pass == "")
                throw "Password cannot be left empty";

            var controller = new LoginSellerController();
            successFlag = controller.loginSeller(email, pass);
        } catch (err) {
            successFlag = false;
            this.displayError(err);
        }

        if (successFlag) {
            this.displaySuccess();
            window.open("../../../frontend/Seller/Seller.html", "__self");
        }
    }
}

var loginUI = new LoginSellerUI();
document.getElementById("button").addEventListener("click", () => {
    loginUI.onLogin();
}); 
import LogoutBuyerController from "../../controllers/buyerFunctions/LogoutBuyerController.js";
import Boundary from "../UseCaseBoundary.js";

class LogoutBuyerUI extends Boundary {
    onLogout() {
        try {
            var successFlag = true;
            var controller = new LogoutBuyerController();
            successFlag = controller.logoutBuyer();
        } catch (err) {
            this.displayError(err);
            successFlag = false;
        }

        if (successFlag) {
            this.displaySuccess();
            window.open("../../../frontend/LoginPage.html", "_self");
        }
    }
}
var logoutUI = new LogoutBuyerUI();
document.getElementById("logout").addEventListener("click", () => {
    logoutUI.onLogout();
})
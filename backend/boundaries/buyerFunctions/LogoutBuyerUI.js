import LogoutBuyerController from "../../controllers/buyerFunctions/LogoutBuyerController.js";
import Boundary from "../UseCaseBoundary.js";

class LogoutBuyerUI extends Boundary {
    onLogout() {
        try {
            var successFlag = true;
            var controller = new LogoutBuyerController();
            successFlag = controller.logoutBuyer();
        } catch (err) {
            successFlag = false;
            this.displayError(err);
        }

        if (successFlag) {
            this.displaySuccess();
            window.open("../../../frontend/LoginPage.html", "_self");
        }
    }
} export default LogoutBuyerUI;

var logoutUI = new LogoutBuyerUI();
document.getElementById("logout").addEventListener("click", () => {
    logoutUI.onLogout();
})
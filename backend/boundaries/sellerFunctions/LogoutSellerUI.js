import LogoutSellerController from "../../controllers/sellerFunctions/LogoutSellerController.js";
import Boundary from "../UseCaseBoundary.js";

class LogoutSellerUI extends Boundary {
    onLogout() {
        try {
            var controller = new LogoutSellerController();
            var successFlag = controller.logoutSeller();

            if (successFlag) {
                // this.displaySuccess();
                // window.open("../../../frontend/LoginPage.html", "_self");
            }
        } catch (err) {
            successFlag = false;
            // this.displayError(err);
        }
        return successFlag;
    }
} export default LogoutSellerUI;
var logoutUI = new LogoutSellerUI();
document.getElementById("logout").addEventListener("click", () => {
    logoutUI.onLogout();
})
import LogoutUsedCarAgentController from "../../controllers/carAgentFunctions/LogoutUsedCarAgentController.js";
import Boundary from "../UseCaseBoundary.js";

class LogoutUsedCarAgentUI extends Boundary {
    onLogout() {
        try{
            var controller = new LogoutUsedCarAgentController();
            var successFlag = controller.logoutUsedCarAgent();

            if (successFlag) {
                this.displaySuccess();
                window.open("../../../frontend/LoginPage.html", "_self");
            }
        } catch (err) {
            successFlag = false;
            this.displayError(err);
        }
    }
} export default LogoutUsedCarAgentUI;
var logoutUI = new LogoutUsedCarAgentUI();
document.getElementById("logout").addEventListener("click", () => {
    logoutUI.onLogout();
})
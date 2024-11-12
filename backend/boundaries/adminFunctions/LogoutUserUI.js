import LogoutUserController from "../../controllers/adminFunctions/LogoutUserController.js"
import Boundary from "../UseCaseBoundary.js"

class LogoutUserUI extends Boundary {
    onLogout() {
        var successFlag = true;
        try {
            var controller = new LogoutUserController();
            successFlag = controller.logoutUser();
        } catch (err) {
            this.displayError(err);
            successFlag = false;
        }

        if (successFlag) {
            this.displaySuccess();
            window.open("../../../frontend/LoginPage.html", "__self");
        }
    }
}

const logoutUI = new LogoutUserUI();
document.getElementById("logout").addEventListener("click", () => {
    logoutUI.onLogout();
}); 
window.onload(logoutUI.displayPage());
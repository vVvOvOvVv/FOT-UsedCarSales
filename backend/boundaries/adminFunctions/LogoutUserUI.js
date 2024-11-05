import LogoutUserController from "../../controllers/adminFunctions/LogoutUserController.js"
import Boundary from "../UseCaseBoundary.js"
var landingPagePath = ""; // replace with landing/first page link
var currentUserId = 0;

class LogoutUserUI extends Boundary {

    displayPage() {
        // display page
        if (currentUserId == null)
            currentUserId = 0;
    }

    onLogout() {
        var resultMsg = "";
        var successFlag = true;
        try {
            var controller = new LogoutUserController();
            successFlag = controller.logoutUser(currentUserId);
        } catch (err) {
            resultMsg = err;
            successFlag = false;
        }

        if (successFlag)
            this.displaySuccess("Logged out! ", "resultMsg");
        else
            this.displayError(resultMsg, "resultMsg");
    }

    displaySuccess(successMsgString, successElementId) {
        super.displaySuccess(successMsgString + "......Redirecting to landing page", successElementId);
        if (landingPagePath != "")
            window.open(landingPagePath,"_self")
        else
            console.error("File path the landing page not set"); // debugging line
    }
}

const logoutUI = new LogoutUserUI();
document.getElementById("logout").addEventListener("click", () => {
    logoutUI.onLogout();
}); 
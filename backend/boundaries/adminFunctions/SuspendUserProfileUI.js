import SuspendUserProfileController from "../../controllers/adminFunctions/SuspendUserProfileController.js"
import Boundary from "../UseCaseBoundary.js";

class SuspendUserProfileUI extends Boundary {
    onSuspend() {
        var resultMsg = "";
        var suspendFlag = true;

        try {
            var profileId = document.getElementById("profileId").value;

            if (profileId == "" | profileId == null)
                throw "Account ID cannot be left empty";
            
            var controller = new SuspendUserProfileController();
            suspendFlag = controller.suspendUserProfile(profileId);
        } catch (err) {
            suspendFlag = false;
            resultMsg = err;
        }

        if (suspendFlag)
            this.displaySuccess(`Profile ID ${profileId} has been suspended`, "resultMsg");
        else
            this.displayError(resultMsg, "resultMsg");
    } 
}

const suspendUserProfileUI = new SuspendUserProfileUI();
document.getElementById("suspend").addEventListener("click", () => {
    suspendUserProfileUI.onSuspend();
}); 
import SuspendUserProfileController from "../../controllers/adminFunctions/SuspendUserProfileController.js"
import Boundary from "../UseCaseBoundary.js";

class SuspendUserProfileUI extends Boundary {
    onSuspend() {
        var suspendFlag = true;

        try {
            var profile = document.getElementById("profile").value;
            if (profile == "" | profile == null)
                throw "Profile ID cannot be left empty";

            var controller = new SuspendUserProfileController();
            suspendFlag = controller.suspendUserProfile(profile);
        } catch (err) {
            suspendFlag = false;
            this.displayError(err);
        }
        if (suspendFlag) {
            if (confirm(`Are you sure you would like to suspend profile ${profile}?`))
                this.displaySuccess();
        }
    } 
}

const suspendUserProfileUI = new SuspendUserProfileUI();
document.getElementById("suspend").addEventListener("click", () => {
    suspendUserProfileUI.onSuspend();
}); 
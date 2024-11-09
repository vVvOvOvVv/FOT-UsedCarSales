import SuspendUserProfileController from "../../controllers/adminFunctions/SuspendUserProfileController.js"
import Boundary from "../UseCaseBoundary.js";

class SuspendUserProfileUI extends Boundary {
    onSuspend() {
        var suspendFlag = true;

        try {
            var profile = document.getElementById("profile").value;
            if (profile == "" | profile == null)
                throw "Account ID cannot be left empty";

            if (profile == "UserAdmin")
                var profileId = 0;
            if (profile == "Buyer")
                var profileId = 1;
            if (profile == "Seller")
                var profileId = 2;
            if (profile == "UserCarAgent")
                var profileId = 3;
            
            var controller = new SuspendUserProfileController();
            suspendFlag = controller.suspendUserProfile(profileId);
        } catch (err) {
            suspendFlag = false;
            this.displayError(err);
        }
        if (suspendFlag) {
            if (confirm(`Are you sure you would like to suspend profile ${profileId}?`))
                this.displaySuccess();
        }
    } 
}

const suspendUserProfileUI = new SuspendUserProfileUI();
document.getElementById("suspend").addEventListener("click", () => {
    suspendUserProfileUI.onSuspend();
}); 
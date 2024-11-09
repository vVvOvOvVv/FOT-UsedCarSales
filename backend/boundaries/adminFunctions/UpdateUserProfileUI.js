import UpdateUserProfileController from "../../controllers/adminFunctions/UpdateUserProfileController.js";
import Boundary from "../UseCaseBoundary.js";

class UpdateUserProfileUI extends Boundary {
    onUpdate() {
        var resultMsg = "";
        var updateFlag = true;

        try {
            var profileId = document.getElementById("profile").value;
            var role = document.getElementById("role").value;
            var roleDesc = document.getElementById("roleDesc").value;

            if (profileId == "" | profileId == null)
                throw "Profile cannot be left empty";
            if (role == "" & roleDesc == "")
                throw "Both update fields cannot be left empty";
            
            var controller = new UpdateUserProfileController();
            updateFlag = controller.updateUserProfile(profileId, role, roleDesc);
        } catch (err) {
            updateFlag = false;
            resultMsg = err;
        }

        if (updateFlag)
            this.displaySuccess();
        else
            this.displayError(resultMsg);
    } 
}

const updateUserProfileUI = new UpdateUserProfileUI();
document.getElementById("update").addEventListener("click", () => {
    updateUserProfileUI.onUpdate();
}); 
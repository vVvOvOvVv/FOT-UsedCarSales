import UpdateUserAccountController from "../../controllers/adminFunctions/UpdateUserAccountController.js";
import Boundary from "../UseCaseBoundary.js";

class UpdateUserAccountUI extends Boundary {
    onUpdate() {
        var resultMsg = "";
        var updateFlag = true;

        try {
            var accountId = document.getElementById("accountId").value;
            var name = document.getElementById("name").value;
            var profileId = document.getElementById("profileId").value;

            if (accountId == "" | accountId == null)
                throw "Account ID cannot be left empty";
            if (name == "" & profileId == "")
                throw "Both update fields cannot be left empty";
            
            var controller = new UpdateUserAccountController();
            updateFlag = controller.updateUserAccount(accountId, name, profileId);
        } catch (err) {
            updateFlag = false;
            resultMsg = err;
        }

        if (updateFlag)
            this.displaySuccess(`Account ID ${accountId} has been updated!`, "resultMsg");
        else
            this.displayError(resultMsg, "resultMsg");
    } 
}

const updateAccountUI = new UpdateUserAccountUI();
document.getElementById("update").addEventListener("click", () => {
    updateAccountUI.onUpdate();
}); 
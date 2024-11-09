import Boundary from "../UseCaseBoundary.js";
import SuspendUserAccountController from "../../controllers/adminFunctions/SuspendUserAccountController.js";

class SuspendUserAccountUI extends Boundary {
    onSuspend() {
        var suspendState = true;

        try {
            var accountId = document.getElementById("accountId").value;
            if (accountId == "" | accountId == null) // no text entered
                throw "Account ID cannot be left empty";

            var controller = new SuspendUserAccountController();
            suspendState = controller.suspendUserAccount(accountId);
        } catch (err) {
            this.displayError(err);
            suspendState = false;
        } 
        if (suspendState) // successful creation
            this.displaySuccess();
    }
}

const suspendUserAccountUI = new SuspendUserAccountUI();
document.getElementById("suspend").addEventListener("click", () =>{
    suspendUserAccountUI.onSuspend();
})
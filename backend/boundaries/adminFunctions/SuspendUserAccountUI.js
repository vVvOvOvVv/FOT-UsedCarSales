import Boundary from "../UseCaseBoundary.js";
import SuspendUserAccountController from "../../controllers/adminFunctions/SuspendUserAccountController.js";

class SuspendUserAccountUI extends Boundary {
    onSuspend() {
        var suspendState = true;
        var errorMsg = "";

        try {
            var accountId = document.getElementById("accountId").value;
            if (accountId.length <= 0) { // no text entered
                suspendState = false; 
                throw "ERROR: account ID cannot be left empty";
            }

            var controller = new SuspendUserAccountController();
            suspendState = controller.suspendUserAccount(accountId);
        } catch (err) {
            suspendState = false;
            errorMsg = err;
        } finally {
            if (suspendState) // successful creation
                this.displaySuccess();
            else
                this.displayError(errorMsg);
        }
    }
}

const suspendUserAccountUI = new SuspendUserAccountUI();
document.getElementById("suspend").addEventListener("click", () =>{
    suspendUserAccountUI.onSuspend();
})
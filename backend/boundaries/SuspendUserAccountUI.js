import Boundary from "./UseCaseBoundary.js";
import SuspendUserAccountController from "../controllers/SuspendUserAccountController.js";

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
                this.displaySuccess("Account with ID \"" + accountId +
                    "\" has been successfully suspended", 
                    "resultMsg");
            else
                this.displayError(errorMsg, "resultMsg");
        }
    }
}

const suspendUserAccountUI = new SuspendUserAccountUI();
document.getElementById("suspend").addEventListener("click", () =>{
    suspendUserAccountUI.onSuspend();
})
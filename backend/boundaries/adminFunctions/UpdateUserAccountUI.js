import UpdateUserAccountController from "../../controllers/adminFunctions/UpdateUserAccountController.js";
import Boundary from "../UseCaseBoundary.js";

class UpdateUserAccountUI extends Boundary {
    onUpdate() {
        var updateFlag = true;

        try {
            var oldEmail = document.getElementById("oldEmail").value;
            var oldPass = document.getElementById("oldpassword").value;
            
            var profileId = document.getElementById("profile").value;
            var newName = document.getElementById("newname").value;
            var email = document.getElementById("email").value;
            var newPass = document.getElementById("newpassword").value;

            if (oldEmail == "" | oldPass == "")
                throw "Please fill in your current email and password"
            if (profileId == "" & newName == "" & email == "" & newPass == "")
                throw "At least one updated field must be filled in";
            
            var controller = new UpdateUserAccountController();
            updateFlag = controller.
                updateUserAccount(oldEmail, oldPass, profileId, newName, email, newPass);
        } catch (err) {
            updateFlag = false;
            this.displayError(err);
        }

        if (updateFlag)
            this.displaySuccess();
    } 
} export default UpdateUserAccountUI;

const updateAccountUI = new UpdateUserAccountUI();
document.getElementById("update").addEventListener("click", () => {
    updateAccountUI.onUpdate();
}); 
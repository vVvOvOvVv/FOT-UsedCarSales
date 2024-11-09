import UserAccount from "../../entities/UserAccount.js"

class UpdateUserAccountController {
    updateUserAccount(oldEmail, oldPass, profileId, newName, email, newPass) {
        var a = new UserAccount();
        return a.updateUA(oldEmail, oldPass, profileId, newName, email, newPass);
    }
}

export default UpdateUserAccountController;
import UserAccount from "../../entities/UserAccount.js"

class UpdateUserAccountController {
    updateUserAccount(accountId, name, profileId) {
        var a = new UserAccount();
        return a.updateUA(accountId, name, profileId);
    }
}

export default UpdateUserAccountController;
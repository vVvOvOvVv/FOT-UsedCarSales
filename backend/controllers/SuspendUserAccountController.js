import UserAccount from "../entities/UserAccount.js";

class SuspendUserAccountController{
    suspendUserAccount(accountId) {
        var a = new UserAccount();
        return a.suspendUA(accountId);
    }
}
export default SuspendUserAccountController;
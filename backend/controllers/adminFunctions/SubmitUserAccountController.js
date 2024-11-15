import UserAccount from "../../entities/UserAccount.js"

class SubmitUserAccountController {
    submitUserAccount(name, profileId, email, password) {
        var a = new UserAccount();
        return a.submitUA(name, profileId, email, password);
    }
}
export default SubmitUserAccountController;
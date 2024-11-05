import UserAccount from "../../entities/UserAccount.js"

class SubmitUserAccountController {
    submitUserAccount(name, email, password) {
        var a = new UserAccount();
        return a.submitUA(name, email, password);
    }
}
export default SubmitUserAccountController;
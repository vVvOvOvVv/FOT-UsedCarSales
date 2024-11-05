import UserAccount from "../../entities/UserAccount.js"

class ViewUserAccountController {
    viewUserAccount() {
        var a = new UserAccount();
        return a.getUserAccount();
    }
}

export default ViewUserAccountController;
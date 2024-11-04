import UserAccount from "../../entities/UserAccount.js"

class LogoutUserController {
    logoutUser(accountId) {
        var a = new UserAccount();
        return a.logout(accountId);
    }
}

export default LogoutUserController;
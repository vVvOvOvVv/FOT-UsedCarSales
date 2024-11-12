import UserAccount from "../../entities/UserAccount.js"

class LogoutUserController {
    logoutUser() {
        var a = new UserAccount();
        return a.logoutU();
    }
}

export default LogoutUserController;
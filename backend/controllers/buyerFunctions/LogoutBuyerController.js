import UserAccount from "../../entities/UserAccount.js"

class LogoutBuyerController {
    logoutBuyer() {
        var a = new UserAccount();
        return a.logoutB();
    }
}
export default LogoutBuyerController;
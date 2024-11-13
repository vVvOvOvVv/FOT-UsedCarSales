import UserAccount from "../../entities/UserAccount.js"

class LogoutSellerController {
    logoutSeller() {
        var a = new UserAccount();
        return a.logoutS();
    }
}
export default LogoutSellerController;
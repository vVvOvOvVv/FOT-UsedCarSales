import UserAccount from "../../entities/UserAccount.js";

class LoginSellerController {
    loginSeller(email, password) {
        var a = new UserAccount();
        return a.sellerDoSignInWithEmailAndPassword(email, password);
    }
}
export default LoginSellerController;
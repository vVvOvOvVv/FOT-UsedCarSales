import UserAccount from "../../entities/UserAccount.js"

class LoginBuyerController {
    loginBuyer(email, pass) {
        var a = new UserAccount();
        return a.buyerDoSignInWithEmailAndPassword(email, pass);
    }
}
export default LoginBuyerController;
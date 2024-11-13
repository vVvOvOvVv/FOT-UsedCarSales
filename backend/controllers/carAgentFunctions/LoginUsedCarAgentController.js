import UserAccount from "../../entities/UserAccount.js"

class LoginUsedCarAgentController {
    UCALogin(email, pass) {
        var a = new UserAccount();
        return a.UCADoSignInWithEmailAndPassword(email, pass);
    }
}
export default LoginUsedCarAgentController;
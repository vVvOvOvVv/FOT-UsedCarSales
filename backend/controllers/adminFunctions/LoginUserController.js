import UserAccount from "../../entities/UserAccount.js"

class LoginUserController {
    signIn(email, pass) {
        var a = new UserAccount();
        return a.doSignInWithEmailAndPassword(email, pass);
    }
}

export default LoginUserController;
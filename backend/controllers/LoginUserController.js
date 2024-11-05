import UserAccount from "../entities/UserAccount.js"

class LoginUserController {
    signIn(profileId, email, pass) {
        var a = new UserAccount();
        return a.doSignInWithEmailAndPassword(profileId, email, pass);
    }
}

export default LoginUserController;
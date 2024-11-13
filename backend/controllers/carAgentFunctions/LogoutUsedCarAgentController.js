import UserAccount from "../../entities/UserAccount.js";

class LogoutUsedCarAgentController {
    logoutUsedCarAgent() {
        var a = new UserAccount();
        return a.logoutUCA();
    }
}
export default LogoutUsedCarAgentController;
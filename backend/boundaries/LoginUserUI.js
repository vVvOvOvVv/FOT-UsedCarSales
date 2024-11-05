import LoginUserController from "../controllers/LoginUserController.js"
import Boundary from "./UseCaseBoundary.js"
// paths to homepages - depends on profile type
var adminHomePath = "../../frontend/User Admin/AdminHomePage.html";
var agentHomePath = "../../frontend/Used Car Agent/AgentHomePage.html";
var sellerHomePath = "";
var buyerHomePath = "";

var profileId;

class LoginUserUI extends Boundary {
    onLogin() {
        var radios = document.getElementsByName("accountgroup");
        var email = document.getElementById("email").value;
        var pass = document.getElementById("pass").value;
        var successFlag = true;
        var resultMsg = "";

        try {
            if (radios != null) {
                for (var i = 0; i < radios.length; i++) {
                    if (radios[i].checked) {
                        switch (radios[i].value) {
                            case "UserAdmin":
                                profileId = 0;
                                break;
                            case "Seller":
                                profileId = 1;
                                break;
                            case "Buyer":
                                profileId = 2;
                                break;
                            default:
                                profileId = 3;
                        }
                        break;
                    }
                }
            } else
                throw "Account Group radio buttons could not be found"
            if (profileId == null)
                throw "Please select your profile type"
            if (email == "")
                throw "Email cannot be left empty";
            if (pass == "")
                throw "Password cannot be left empty";

            var controller = new LoginUserController();
            successFlag = controller.signIn(profileId, email, pass);
        } catch (err) {
            successFlag = false;
            resultMsg = err;
        }

        if (successFlag)
            this.displaySuccess("Logged in!", "resultMsg");
        else
            this.displayError(resultMsg, "resultMsg");
    }

    displaySuccess(successMsgString, successElementId) {
        super.displaySuccess(successMsgString + "......Redirecting to homepage", successElementId);
        var homepagePath = "";
        switch (profileId) {
            case 0: // admin
                homepagePath = adminHomePath;
                break;
            case 1: // seller
                homepagePath = sellerHomePath;
                break;
            case 2: // buyer
                homepagePath = buyerHomePath;
                break;
            default: // agent
                homepagePath = agentHomePath;
        }

        if (homepagePath != "")
            window.open(homepagePath,"_self")
        else
            console.error("File path the homepage not set"); // debugging line
    }
}

const loginUI = new LoginUserUI();
document.getElementById("button").addEventListener("click", () => {
    loginUI.onLogin();
}); 
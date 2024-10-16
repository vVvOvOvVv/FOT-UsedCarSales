import UserProfile from "../entities/UserProfile.js";
import Controller from "./UseCaseController.js"

class CreateUserProfileController extends Controller {
    
    static submitUserProfile(p) {
        var result = UserProfile.submitUP(p);
        console.log("controller: " + result);
        return result;
    }
}

export default CreateUserProfileController;
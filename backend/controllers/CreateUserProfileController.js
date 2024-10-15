import UserProfile from "../entities/UserProfile.js";
import Controller from "./UseCaseController.js"

class CreateUserProfileController extends Controller {
    
    static submitUserProfile(p) {
        return UserProfile.submitUP(p);
    }
}

export default CreateUserProfileController;
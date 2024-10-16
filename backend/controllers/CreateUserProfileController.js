import UserProfile from "../entities/UserProfile.js";
import Controller from "./UseCaseController.js"

class CreateUserProfileController extends Controller {
    
    submitUserProfile(p) {
        try {
            var userProfile = new UserProfile();
            var result = userProfile.submitUP(p); 
            return result; 
        } catch (err) {
            throw err; // throws back to the boundary
        }
    }
}

export default CreateUserProfileController;
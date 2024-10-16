import UserProfile from "../entities/UserProfile.js";
import Controller from "./UseCaseController.js"; // base class

class CreateUserProfileController extends Controller {  
    submitUserProfile(role, roleDesc) {
        var p = new UserProfile();
        try {  
            var result = p.submitUP(role, roleDesc); 
        } catch (err) { 
            throw err; // throws back to the boundary
        } finally {
            return result;
        }
    }
}

export default CreateUserProfileController;
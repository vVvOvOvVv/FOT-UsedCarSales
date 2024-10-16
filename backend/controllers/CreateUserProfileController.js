import UserProfile from "../entities/UserProfile.js";
import Controller from "./UseCaseController.js"

class CreateUserProfileController extends Controller {
    constructor() {
        super();
    }
    submitUserProfile(p) {
        try { 
            var profile = p;
            var result = profile.submitUP(); 
        } catch (err) {
            throw err; // throws back to the boundary
        } finally {
            return result;
        }
    }
}

export default CreateUserProfileController;
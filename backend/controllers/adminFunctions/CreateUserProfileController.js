import UserProfile from "../../entities/UserProfile.js"; 

class CreateUserProfileController{  
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
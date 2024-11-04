import UserProfile from "../../entities/UserProfile.js"

class UpdateUserProfileController {
    updateUserProfile(profileId, role, roleDesc) {
        var p = new UserProfile();
        return p.updateUP(profileId, role, roleDesc)
    }
}

export default UpdateUserProfileController;
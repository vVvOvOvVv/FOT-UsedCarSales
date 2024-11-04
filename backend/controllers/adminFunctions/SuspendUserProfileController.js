import UserProfile from "../../entities/UserProfile.js"

class SuspendUserProfileController {
    suspendUserProfile(profileId) {
        var p = new UserProfile();
        return p.suspendUP(profileId);
    }
}

export default SuspendUserProfileController;
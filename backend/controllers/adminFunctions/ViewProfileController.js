import UserProfile from "../../entities/UserProfile.js"

class ViewProfileController {
    viewProfiles() {
        var p = new UserProfile();
        return p.getProfiles();
    }
}

export default ViewProfileController;
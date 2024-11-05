import UserProfile from "../../entities/UserProfile.js";

class SearchProfileController {
    searchProfile(profileId) {
        var p = new UserProfile();
        return p.searchProfile(profileId);
    }
}

export default SearchProfileController;
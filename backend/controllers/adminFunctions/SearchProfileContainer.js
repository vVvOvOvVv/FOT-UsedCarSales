import UserProfile from "../../entities/UserProfile.js";

class SearchProfileContainer {
    searchProfile(profileId) {
        var p = new UserProfile();
        return p.searchProfile(profileId);
    }
}

export default SearchProfileContainer;
import SearchProfileController from "../../controllers/adminFunctions/SearchProfileController.js"
import Boundary from "../UseCaseBoundary.js"

class SearchProfileUI extends Boundary {
    searchProfile() {
        var profileId = document.getElementById("profileId").value;

        try {
            if (profileId == "" | profileId == null)
                throw "Profile ID cannot be left empty"
            else {
                var controller = new SearchProfileController();
                var profile = controller.searchProfile(profileId);

                // turn data into readable text
                var profileInfo =
                    `Profile ID searched: ${profileId}\n` +
                    `Role: ${profile.entityInformation.role}\n` +
                    `Description: ${profile.entityInformation.roleDescription}`;
                    `Description: ${profile.entityInformation.roleDescription}`;
                document.getElementById("profile").innerHTML = profileInfo;
            }
        } catch (err) {
            console.error(err);
            document.getElementById("profile").innerHTML = err;
        }
    }
}

const searchProfileUI = new SearchProfileUI();
document.getElementById("search").addEventListener("click", () => {
    searchProfileUI.searchProfile();
}); 
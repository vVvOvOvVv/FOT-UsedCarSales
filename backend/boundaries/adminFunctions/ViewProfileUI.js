import ViewProfileController from "../../controllers/adminFunctions/ViewProfileController.js";
import Boundary from "../UseCaseBoundary.js";

class ViewProfileUI extends Boundary {
    displayProfilePage() {
        try {
            var controller = new ViewProfileController();
            var profileArray = controller.viewProfiles();
            var profilesText = "";

            // turn data in array into text
            if (profileArray != null) {
                if (profileArray.length != 0) {
                    for (var i = 0; i < profileArray.length; i++) {
                        profilesText += `Profile ID: ${profileArray[i].identifiers.profileId}\n` +
                            `Profile role: ${profileArray[i].entityInformation.role}\n` +
                            `Profile description: ${profileArray[i].entityInformation.roleDescription}` +
                            `\n\n`; // line breaks
                        if (i != profileArray.length - 1) // not the last element
                            profilesText += `\n`; // for visual clarity
                    }
                } else 
                    profilesText = "No profiles found";
            } else  // array == null - fail alt flow according to sequence diagram
                profilesText = "Could not find profile data";

            // write to <pre> tag
            document.getElementById("profiles").innerHTML = profilesText;
            
        } catch (err) {
            console.log(err);
        }
    }
}

const viewProfileUI = new ViewProfileUI();
document.getElementById("view").addEventListener("click", () => {
    viewProfileUI.displayProfilePage();
}); 
import SearchProfileController from "../../controllers/adminFunctions/SearchProfileController.js"
import Boundary from "../UseCaseBoundary.js"

class SearchProfileUI extends Boundary {
    searchProfile() {
        try {
            var profileId = document.getElementById("profileId").value;
            if (profileId == "" | profileId == null)
                throw "Profile ID cannot be left empty"
            else {
                var controller = new SearchProfileController();
                var profile = controller.searchProfile(profileId);

                // create elements
                var divItem = document.createElement("div");
                divItem.className = "search-result";
                // list
                var ulItem = document.createElement("ul");
                var idItem = document.createElement("li");
                var text = document.createTextNode(`Profile ID: ${profile.identifiers.profileId}`);
                idItem.appendChild(text);
                var roleItem = document.createElement("li");
                var text = document.createTextNode(`Profile ID: ${profile.entityInformation.role}`);
                roleItem.appendChild(text);
                var descItem = document.createElement("li");
                var text = document.createTextNode(`Profile ID: ${profile.entityInformation.roleDescription}`);
                descItem.appendChild(text);
                // append to list
                ulItem.appendChild(idItem);
                ulItem.appendChild(roleItem);
                ulItem.appendChild(descItem);
                // append to div
                divItem.appendChild(ulItem);
                // add to page
                var form = document.getElementById("form");
                if (form == null)
                    throw "Form could not be found";
                form.insertAdjacentElement("afterend", divItem);
            }
        } catch (err) {
            console.error(err);
            alert(err);
        }
    }
}

const searchProfileUI = new SearchProfileUI();
document.getElementById("search").addEventListener("click", () => {
    searchProfileUI.searchProfile();
}); 
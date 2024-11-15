import ViewProfileController from "../../controllers/adminFunctions/ViewProfileController.js";
import Boundary from "../UseCaseBoundary.js";

class ViewProfileUI extends Boundary {
    displayProfilePage() {
        try {
            var controller = new ViewProfileController();
            var profileArray = controller.viewProfiles();

            // turn data in array into text
            if (profileArray != null) {
                if (profileArray.length != 0) {
                    var container = document.getElementsByClassName("row p-3");
                    if (container == null)
                        throw "Back button is missing";
                    for (var i = 0; i < profileArray.length; i++) {
                        // create elements
                        var divItem = document.createElement("div");
                        divItem.className = 
                            "col-6 mb-4 d-flex flex-column align-items-center form-container";
                        var role = document.createElement("h3");
                        var text = document.createTextNode(profileArray[i].entityInformation.role);
                        role.appendChild(text);
                        var id = document.createElement("p");
                        text = document.createTextNode(`Profile ID: ${
                            profileArray[i].identifiers.profileId}`);
                        id.appendChild(text);
                        var desc = document.createElement("p");
                        text = document.createTextNode(profileArray[i].entityInformation.roleDescription);
                        desc.appendChild(text);
                        var status = document.createElement("p");
                        text = document.createTextNode(profileArray[i].entityInformation.status);
                        status.appendChild(text);
                        // append to div
                        divItem.appendChild(role);
                        divItem.appendChild(id);
                        divItem.appendChild(desc);
                        divItem.appendChild(status);
                        // add to page
                        container[0].appendChild(divItem);
                    }
                } else 
                    profilesText = "No profiles found";
            } else  // array == null - fail alt flow according to sequence diagram
                profilesText = "Could not find profile data";            
        } catch (err) {
            console.log(err);
        }
    }
}

const viewProfileUI = new ViewProfileUI();
document.getElementById("nav").addEventListener("load", (viewProfileUI.displayProfilePage())); 
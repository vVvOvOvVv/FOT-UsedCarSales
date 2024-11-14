import ViewUserAccountController from "../../controllers/adminFunctions/ViewUserAccountController.js";
import Boundary from "../UseCaseBoundary.js";

class ViewUserAccountUI extends Boundary {
    displayPage() {
        try {
            var controller = new ViewUserAccountController();
            var accountArray = controller.viewUserAccount();

            // turn data in array into text
            if (accountArray != null) {
                if (accountArray.length != 0) {
                    var backBtn = document.getElementById("back");
                    if (backBtn == null)
                        throw "Back button missing"
                    for (var i = 0; i < accountArray.length; i++) {
                        // create elements
                        var divItem = document.createElement("div");
                        divItem.className = "container-fluid";
                        // list
                        var list = document.createElement("ul");
                        var nameItem = document.createElement("li");
                        var text = 
                            document.createTextNode(`Name: ${accountArray[i].entityInformation.name}`);
                        nameItem.appendChild(text);
                        var emailItem = document.createElement("li");
                        var text = 
                            document.createTextNode(`Email: ${accountArray[i].entityInformation.email}`);
                        emailItem.appendChild(text);
                        var roleItem = document.createElement("li");
                        var text = 
                            document.createTextNode(`Profile ID: ${accountArray[i].entityInformation.profileId}`);
                        roleItem.appendChild(text);
                        // append to list
                        list.appendChild(nameItem);
                        list.appendChild(emailItem);
                        list.appendChild(roleItem);
                        // append to div
                        divItem.appendChild(list);
                        // add to page
                        backBtn.insertAdjacentElement("beforebegin", divItem);
                    }
                } else 
                    accountsText = "No accounts found";
            } else  // array == null - fail alt flow according to sequence diagram
                accountsText = "Could not find account data";
        } catch (err) {
            console.log(err);
        }
    }
} export default ViewUserAccountUI

const viewAccountUI = new ViewUserAccountUI();
document.getElementById("nav").addEventListener("load", (viewAccountUI.displayPage())); 
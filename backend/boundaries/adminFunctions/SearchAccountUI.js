import SearchAccountController from "../../controllers/adminFunctions/SearchAccountController.js"
import Boundary from "../UseCaseBoundary.js"

class SearchAccountUI extends Boundary {
    searchAccount() {
        var accountId = document.getElementById("accountId").value;

        try {
            if (accountId == "" | accountId == null)
                throw "Account ID cannot be left empty"
            else {
                var controller = new SearchAccountController();
                var account = controller.searchAccount(accountId);

                // create elements
                var divItem = document.createElement("div");
                divItem.className = "searchResult form-container";
                // create list
                var ulItem = document.createElement("ul");
                var nameItem = document.createElement("li");
                var text = document.createTextNode(`Name: ${account.entityInformation.name}`);
                nameItem.appendChild(text);
                var emailItem = document.createElement("li");
                var text = document.createTextNode(`Email: ${account.entityInformation.email}`);
                emailItem.appendChild(text);
                var roleItem = document.createElement("li");
                var text = document.createTextNode(`Profile ID: ${account.entityInformation.profileId}`);
                roleItem.appendChild(text);
                var statusItem = document.createElement("li");
                var text = document.createTextNode(`Status: ${account.entityInformation.status}`);
                statusItem.appendChild(text);
                // does not fetch password for security
                // append to ul
                ulItem.appendChild(nameItem);
                ulItem.appendChild(emailItem);
                ulItem.appendChild(roleItem);
                ulItem.appendChild(statusItem);
                // append to div
                divItem.appendChild(ulItem);
                console.log(divItem); // ensure data presentation is correct
                // add to page
                var container = document.getElementById("container");
                if (container == null)
                    throw "Search button could not be found"
                console.log(container); // ensure data presentation is correct
                container.appendChild(divItem);
            }
        } catch (err) {
            console.error(err);
            alert(err);
        }
    }
}

const searchAccountUI = new SearchAccountUI();
document.getElementById("search").addEventListener("click", () => {
    searchAccountUI.searchAccount();
}); 
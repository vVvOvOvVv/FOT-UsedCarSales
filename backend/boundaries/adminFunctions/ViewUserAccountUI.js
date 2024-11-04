import ViewUserAccountController from "../../controllers/adminFunctions/ViewUserAccountController.js";
import Boundary from "../UseCaseBoundary.js";

class ViewUserAccountUI extends Boundary {
    displayPage() {
        try {
            var controller = new ViewUserAccountController();
            var accountArray = controller.viewUserAccount();
            var accountsText = "";

            // turn data in array into text
            if (accountArray != null) {
                if (accountArray.length != 0) {
                    for (var i = 0; i < accountArray.length; i++) {
                        accountsText +=
                            `Account ID: ${accountArray[i].identifiers.accountId}\n` + 
                            `Name: ${accountArray[i].entityInformation.name}\n` +
                            `Profile ID: ${accountArray[i].entityInformation.profileId}\n` +
                            `Email: ${accountArray[i].entityInformation.email}\n` +
                            // password excluded for security reasons
                            `Status: ${accountArray[i].entityInformation.status}\n`;
                        if (i != accountArray.length - 1) // not the last element
                            accountsText += `\n`; // for visual clarity
                    }
                } else 
                    accountsText = "No accounts found";
            } else  // array == null - fail alt flow according to sequence diagram
                accountsText = "Could not find account data";

            // display to user
            document.getElementById("accounts").innerHTML = accountsText;
            
        } catch (err) {
            console.log(err);
        }
    }
}

const viewAccountUI = new ViewUserAccountUI();
document.getElementById("view").addEventListener("click", () => {
    viewAccountUI.displayPage();
}); 
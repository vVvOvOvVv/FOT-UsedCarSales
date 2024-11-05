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

                // turn data into readable text
                var accountInfo =
                    `Account ID searched: ${accountId}\n` +
                    `Name: ${account.entityInformation.name}\n` +
                    `Email: ${account.entityInformation.email}\n` +
                    `Status: ${account.entityInformation.status}`; // passwords omitted for security
                document.getElementById("account").innerHTML = accountInfo;
            }
        } catch (err) {
            console.error(err);
            document.getElementById("account").innerHTML = err;
        }
    }
}

const searchAccountUI = new SearchAccountUI();
document.getElementById("search").addEventListener("click", () => {
    searchAccountUI.searchAccount();
}); 
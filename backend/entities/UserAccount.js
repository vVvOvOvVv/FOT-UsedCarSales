import Data from "../data/Data.js" 

class UserAccount {
    static lastAccountId = 1;
    
    init() { 
        if (UserAccount.lastAccountId == null)
            UserAccount.lastAccountId = 3; // already have 3 accounts in the JSON - for testing
    }

    submitUA(name, email, password) {
        this.init();
        var isSuccess = true;
        var accountId = UserAccount.lastAccountId++;

        var data = {
            "identifiers":
                {"accountId": accountId},
            "entityInformation":
                {"name": name,
                "email": email,
                "password": password
        }};
        try{
            this.writeJSON(data);
        } catch (err) {
            isSuccess = false;
            throw err;
        } finally {
            return isSuccess;
        }
    }

    writeJSON(data) {  
        // write data into JSON
        try {
            Data.userAccounts.push(data);
        } catch (err) {  
            throw "Unable to write to JSON"; 
        } 
    }

    suspendUA(accountId) {
        var isSuccess;
        try {
            var accData = this.searchUA(accountId);
            if (accData != null) {
                if (accData.entityInformation.status == "suspended") {
                    throw "Account " + accountId + " is already suspended!";
                } else {
                    accData.entityInformation.status = "suspended";
                    isSuccess = true;
                }
            } else
                throw "Account with ID " + accountId + " could not be found";
        } catch (err) {
            isSuccess = false;
            throw err; // propagate error message to the controller
        }
        return isSuccess;
    }

    searchUA(accountId) { 
        for (var i = 0; i < Data.userAccounts.length; i++) {
            if (Data.userAccounts[i].identifiers.accountId == accountId)
                return Data.userAccounts[i];
        }
    }
}
export default UserAccount;
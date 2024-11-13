import Data from "../data/Data.js" 
/* example structure ===================================
static userAccounts = [
        {"identifiers":
            {"accountId": 0},
        "entityInformation":
            {"name": "Alex",
            "roleId": 0,
            "email": "alex@gmail.com",
            "password": "a1",
            "status": "active"}
    }];
*/

class UserAccount {
    static lastAccountId = 3;
    
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
                "password": password,
                "status": "active"
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
            // attempt to find user account
            var accData;
            for (var i = 0; i < Data.userAccounts.length; i++) {
                if (Data.userAccounts[i].identifiers.accountId == accountId) {
                    accData = Data.userAccounts[i];
                    break;
                }
            }

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

    getUserAccount() {
        if (Data.userAccounts == null) // array doesn't exist
            return null;
        else
            return Data.userAccounts;
    }

    updateUA(oldEmail, oldPass, profileId, name, email, pass) {
        var successFlag = false;
        try {
            if (Data.userAccounts == null)
                throw "Data could not be found";
            if (Data.userAccounts.length == 0)
                throw "No accounts exist";
            for (var i = 0; i < Data.userAccounts.length; i++) {
                if (oldEmail == Data.userAccounts[i].entityInformation.email &
                    oldPass == Data.userAccounts[i].entityInformation.password) {
                    successFlag = true;
                    var account = Data.userAccounts[i];
                    if (profileId != "")
                        account.entityInformation.profileId = profileId;
                    if (name != "")
                        account.entityInformation.name = name;
                    if (email != "")
                        account.entityInformation.email = email;
                    if (pass != "")
                        account.entityInformation.password = pass;
                    break;
                }
            }
            if (successFlag == false)
                throw "Data entered does not match credentials"
        } catch (err) {
            throw err; // propagate to boundary
        }
        return successFlag;
    }

    searchA(accountId) {
        var account;
        try {
            if (Data.userAccounts == null)
                throw "Account data missing"
            else {
                for (var i = 0; i < Data.userAccounts.length; i++) {
                    if (Data.userAccounts[i].identifiers.accountId == accountId) {
                        account = Data.userAccounts[i];
                        break;
                    }
                }
                if (account == null)
                    throw "Account could not be found"
            }
        } catch (err) {
            throw err;
        }
        return account;
    }

    doSignInWithEmailAndPassword(email, pass) {
        var successFlag = false;
        try {
            if (Data.userAccounts == null)
                throw "Account data missing";
            for (var i = 0; i < Data.userAccounts.length; i++) {
                if (Data.userAccounts[i].entityInformation.email == email &
                    Data.userAccounts[i].entityInformation.password == pass &
                    Data.userAccounts[i].entityInformation.profileId == 0) {
                    successFlag = true;
                    Data.currentUser = Data.userAccounts[i].identifiers.accountId;
                }
            }
            if (!successFlag)
                throw "Login credentials do not match"
        } catch (err) {
            throw err;
        }
        return successFlag;
    }

    buyerDoSignInWithEmailAndPassword(email, pass) {
        var successFlag = false;
        try {
            if (Data.userAccounts == null)
                throw "Account data missing";
            for (var i = 0; i < Data.userAccounts.length; i++) {
                if (Data.userAccounts[i].entityInformation.email == email &
                    Data.userAccounts[i].entityInformation.password == pass &
                    Data.userAccounts[i].entityInformation.profileId == 2) {
                    successFlag = true;
                    Data.currentUser = Data.userAccounts[i].identifiers.accountId;
                }
            }
            if (!successFlag)
                throw "Login credentials do not match"
        } catch (err) {
            throw err;
        }
        return successFlag;
    }

    sellerDoSignInWithEmailAndPassword(email, pass) {
        var successFlag = false;
        try {
            if (Data.userAccounts == null)
                throw "Account data missing";
            for (var i = 0; i < Data.userAccounts.length; i++) {
                if (Data.userAccounts[i].entityInformation.email == email &
                    Data.userAccounts[i].entityInformation.password == pass &
                    Data.userAccounts[i].entityInformation.profileId == 1) {
                    successFlag = true;
                    Data.currentUser = Data.userAccounts[i].identifiers.accountId;
                }
            }
            if (!successFlag)
                throw "Login credentials do not match"
        } catch (err) {
            throw err;
        }
        return successFlag;
    }

    UCADoSignInWithEmailAndPassword(email, pass) {
        var successFlag = false;
        try {
            if (Data.userAccounts == null)
                throw "Account data missing";
            for (var i = 0; i < Data.userAccounts.length; i++) {
                if (Data.userAccounts[i].entityInformation.email == email &
                    Data.userAccounts[i].entityInformation.password == pass &
                    Data.userAccounts[i].entityInformation.profileId == 3) {
                    successFlag = true;
                    Data.currentUser = Data.userAccounts[i].identifiers.accountId;
                }
            }
            if (!successFlag)
                throw "Login credentials do not match"
        } catch (err) {
            throw err;
        }
        return successFlag;
    }

    logoutB() {
        var successFlag = false;
        try {
            if (Data.userAccounts == null)
                throw "Account data missing";
            if (Data.currentUser == null)
                throw "Error logging out"
            Data.currentUser = null;
            successFlag = true;
        } catch (err) {
            throw err;
        }
        return successFlag;
    }

    logoutU() {
        var successFlag = false;
        try {
            if (Data.userAccounts == null)
                throw "Account data missing";
            if (Data.currentUser == null)
                throw "Error logging out"
            Data.currentUser = null;
            successFlag = true;
        } catch (err) {
            throw err;
        }
        return successFlag;
    }

    logoutS() {
        var successFlag = false;
        try {
            if (Data.userAccounts == null)
                throw "Account data missing";
            if (Data.currentUser == null)
                throw "Error logging out"
            Data.currentUser = null;
            successFlag = true;
        } catch (err) {
            throw err;
        }
        return successFlag;
    }
}
export default UserAccount;
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
    init() { 
        if (localStorage.getItem("nextUserId") == null)
            localStorage.setItem("nextUserId", 100);
    }

    submitUA(name, profileId, email, password) {
        this.init();
        var isSuccess = true;
        var accountId = localStorage.getItem("nextUserId");
        var accData = JSON.parse(localStorage.getItem("userAccounts"));

        var data = {
            "identifiers":
                {"accountId": accountId},
            "entityInformation":
                {"name": name,
                "profileId": profileId,
                "email": email,
                "password": password,
                "status": "active"
        }};
        localStorage.setItem("nextUserId", ++accountId);
        try{
            accData.push(data);
            localStorage.setItem("userAccounts", JSON.stringify(accData));
        } catch (err) {
            isSuccess = false;
            throw err;
        } finally {
            return isSuccess;
        }
    }

    suspendUA(accountId) {
        var isSuccess;
        try {
            // attempt to find user account
            var accData;
            var data = JSON.parse(localStorage.getItem("userAccounts"));
            if (data == null)
                throw "Unable to find data"
            for (var i = 0; i < data.length; i++) {
                if (data[i].identifiers.accountId == accountId) {
                    accData = data[i];
                    if (accData.entityInformation.status == "suspended") {
                        throw "Account " + accountId + " is already suspended!";
                    } else {
                        accData.entityInformation.status = "suspended";
                        isSuccess = true;
                    }
                    data[i] = accData;
                    localStorage.setItem("userAccounts", JSON.stringify(data));
                    break;
                }
            }
            if (!isSuccess)
                throw "Account with ID " + accountId + " could not be found";
        } catch (err) {
            isSuccess = false;
            throw err; // propagate error message to the controller
        }
        return isSuccess;
    }

    getUserAccount() {
        var data = JSON.parse(localStorage.getItem("userAccounts"));
        if (data == null) // array doesn't exist
            return null;
        else
            return data;
    }

    updateUA(oldEmail, oldPass, profileId, name, email, pass) {
        var successFlag = false;
        var data = JSON.parse(localStorage.getItem("userAccounts"));
        try {
            if (data == null)
                throw "Data could not be found";
            if (data.length == 0)
                throw "No accounts exist";
            for (var i = 0; i < data.length; i++) {
                if (oldEmail == data[i].entityInformation.email &
                    oldPass == data[i].entityInformation.password) {
                    successFlag = true;
                    var account = data[i];
                    if (profileId != "")
                        account.entityInformation.profileId = profileId;
                    if (name != "")
                        account.entityInformation.name = name;
                    if (email != "")
                        account.entityInformation.email = email;
                    if (pass != "")
                        account.entityInformation.password = pass;
                    data[i] = account;
                    localStorage.setItem("userAccounts", JSON.stringify(data));
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
        var data = JSON.parse(localStorage.getItem("userAccounts"));
        try {
            if (data == null)
                throw "Account data missing"
            else {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].identifiers.accountId == accountId) {
                        account = data[i];
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
        var data = JSON.parse(localStorage.getItem("userAccounts"));
        try {
            if (data == null)
                throw "Account data missing";
            for (var i = 0; i < data.length; i++) {
                if (data[i].entityInformation.email == email &
                    data[i].entityInformation.password == pass &
                    data[i].entityInformation.profileId == 0) {
                    // get profile status
                    var profiles = JSON.parse(localStorage.getItem("userProfiles"));
                    var status;
                    profiles.forEach(profile => {
                        if (profile.identifiers.profileId == 0)
                            status = profile.entityInformation.status;
                    });
                    if (status == null)
                        throw "Profile mismatch";
                    if (data[i].entityInformation.status != "suspended" |
                        status != "suspended") {
                        successFlag = true;
                        localStorage.setItem("currentUser", data[i].identifiers.accountId);
                    } else
                        throw "Account suspended";
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
        var data = JSON.parse(localStorage.getItem("userAccounts"));
        try {
            if (data == null)
                throw "Account data missing";
            for (var i = 0; i < data.length; i++) {
                if (data[i].entityInformation.email == email &
                    data[i].entityInformation.password == pass &
                    data[i].entityInformation.profileId == 2) {
                        // get profile status
                        var profiles = JSON.parse(localStorage.getItem("userProfiles"));
                        var status;
                        profiles.forEach(profile => {
                            if (profile.identifiers.profileId == 2)
                                status = profile.entityInformation.status;
                        });
                        if (status == null)
                            throw "Profile mismatch";
                        if (data[i].entityInformation.status != "suspended" |
                            status != "suspended") {
                            successFlag = true;
                            localStorage.setItem("currentUser", data[i].identifiers.accountId);
                        } else
                            throw "Account suspended";
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
        var data = JSON.parse(localStorage.getItem("userAccounts"));
        try {
            if (data == null)
                throw "Account data missing";
            for (var i = 0; i < data.length; i++) {
                if (data[i].entityInformation.email == email &
                    data[i].entityInformation.password == pass &
                    data[i].entityInformation.profileId == 1) {
                        // get profile status
                        var profiles = JSON.parse(localStorage.getItem("userProfiles"));
                        var status;
                        profiles.forEach(profile => {
                            if (profile.identifiers.profileId == 1)
                                status = profile.entityInformation.status;
                        });
                        if (status == null)
                            throw "Profile mismatch";
                        if (data[i].entityInformation.status != "suspended" |
                            status != "suspended") {
                            successFlag = true;
                            localStorage.setItem("currentUser", data[i].identifiers.accountId);
                        } else
                            throw "Account suspended";
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
        var data = JSON.parse(localStorage.getItem("userAccounts"));
        try {
            if (data == null)
                throw "Account data missing";
            for (var i = 0; i < data.length; i++) {
                if (data[i].entityInformation.email == email &
                    data[i].entityInformation.password == pass &
                    data[i].entityInformation.profileId == 3) {
                        // get profile status
                        var profiles = JSON.parse(localStorage.getItem("userProfiles"));
                        var status;
                        profiles.forEach(profile => {
                            if (profile.identifiers.profileId == 3)
                                status = profile.entityInformation.status;
                        });
                        if (status == null)
                            throw "Profile mismatch";
                        if (data[i].entityInformation.status != "suspended" |
                            status != "suspended") {
                            successFlag = true;
                            localStorage.setItem("currentUser", data[i].identifiers.accountId);
                        } else
                            throw "Account suspended";
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
        var data = JSON.parse(localStorage.getItem("userAccounts"));
        try {
            if (data == null)
                throw "Account data missing";
            if (localStorage.getItem("currentUser") == null)
                throw "Error logging out"
            for (var i = 0; i < data.length; i++) {
                if (data[i].identifiers.accountId == localStorage.getItem("currentUser") &
                    data[i].entityInformation.profileId == 2) {
                    localStorage.setItem("currentUser", null);
                    successFlag = true;
                    break;
                }
            }
            if (!successFlag)
                throw "Current user and profile mismatch"
        } catch (err) {
            throw err;
        }
        return successFlag;
    }

    logoutU() {
        var successFlag = false;
        var data = JSON.parse(localStorage.getItem("userAccounts"));
        try {
            if (data == null)
                throw "Account data missing";
            if (localStorage.getItem("currentUser") == null)
                throw "Error logging out"
            for (var i = 0; i < data.length; i++) {
                if (data[i].identifiers.accountId == localStorage.getItem("currentUser") &
                    data[i].entityInformation.profileId == 0) {
                    localStorage.setItem("currentUser", null);
                    successFlag = true;
                    break;
                }
            }
            if (!successFlag)
                throw "Current user and profile mismatch"
        } catch (err) {
            throw err;
        }
        console.log(successFlag);
        return successFlag;
    }

    logoutS() {
        var successFlag = false;
        var data = JSON.parse(localStorage.getItem("userAccounts"));
        try {
            if (data == null)
                throw "Account data missing";
            if (localStorage.getItem("currentUser") == null)
                throw "Error logging out"
            for (var i = 0; i < data.length; i++) {
                if (data[i].identifiers.accountId == localStorage.getItem("currentUser") &
                    data[i].entityInformation.profileId == 1) {
                    localStorage.setItem("currentUser", null);
                    successFlag = true;
                    break;
                }
            }
            if (!successFlag)
                throw "Current user and profile mismatch"
            successFlag = true;
        } catch (err) {
            throw err;
        }
        return successFlag;
    }

    logoutUCA() {
        var successFlag = false;
        var data = JSON.parse(localStorage.getItem("userAccounts"));
        try {
            if (data == null)
                throw "Account data missing";
            if (localStorage.getItem("currentUser") == null)
                throw "Error logging out"
            for (var i = 0; i < data.length; i++) {
                if (data[i].identifiers.accountId == localStorage.getItem("currentUser") &
                    data[i].entityInformation.profileId == 3) {
                    localStorage.setItem("currentUser", null);
                    successFlag = true;
                    break;
                }
            }
            if (!successFlag)
                throw "Current user and profile mismatch"
            successFlag = true;
        } catch (err) {
            throw err;
        }
        return successFlag;
    }
}
export default UserAccount;
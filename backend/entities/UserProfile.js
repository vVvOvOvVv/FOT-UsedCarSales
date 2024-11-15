class UserProfile {   
    init() { 
        if (localStorage.getItem("nextProfileId") == null)
            localStorage.setItem("nextProfileId", 4);
    }

    submitUP(role, roleDesc) {
        this.init();
        // attempt to enter into the JSON 
        var isSuccess = true;
        var profileId = localStorage.getItem("nextProfileId");
        localStorage.setItem("nextProfileId", profileId++);
        var profileData = JSON.parse(localStorage.getItem("userProfiles"));

        var data = { 
            "identifiers": 
                {"profileId": profileId}, 
            "entityInformation":
                {"role": role, 
                "roleDescription": roleDesc,
                "status": "active"
        }}
        try {
            profileData.push(data);  
            localStorage.setItem("userProfiles", JSON.stringify(profileData));
        } catch (err) {  
            isSuccess = false; 
            throw err;
        } finally {
            return isSuccess;
        }
    } 

    getProfiles() {
        var data = JSON.parse(localStorage.getItem("userProfiles"));
        if (data == null)
                return null;
        else
            return data;
    }

    updateUP(profileId, role, roleDesc) {
        var profile;
        var successFlag = true;
        var data = JSON.parse(localStorage.getItem("userProfiles"));
        var idx;
        if (data == null)
            throw "Data could not be found";
        for (var i = 0; i < data.length; i++) {
            if (profileId == data[i].identifiers.profileId) {
                profile = data[i];
                idx = i;
                break;
            }
        }

        try {
            if (profile != null & idx != null) {
                if (role != "")
                    profile.entityInformation.role = role;
                if (roleDesc != "")
                    profile.entityInformation.roleDescription = roleDesc;
                data[idx] = profile;
                localStorage.setItem("userProfiles", JSON.stringify(data));
            } else
                throw `Profile with ID ${profileId} could not be found`;
        } catch (err) {
            successFlag = false;
            throw err;
        }
        return successFlag;
    }

    suspendUP(profileId) {
        var profile;
        var successFlag = true;
        var data = JSON.parse(localStorage.getItem("userProfiles"));
        var idx;
        for (var i = 0; i < data.length; i++) {
            if (profileId == data[i].identifiers.profileId) {
                profile = data[i];
                idx = i;
                break;
            }
        }

        try {
            if (profile != null & idx != null) {
                if (profile.entityInformation.status == "suspended")
                    throw `Profile with ID ${profileId} is already suspended`;
                else {
                    profile.entityInformation.status = "suspended";
                    data[idx] = profile;
                    localStorage.setItem("userProfiles", JSON.stringify(data));
                }
            } else
                throw `Profile with ID ${profileId} could not be found`;
        } catch (err) {
            successFlag = false;
            throw err;
        }
        return successFlag;
    }

    searchProfile(profileId) {
        var profile;
        var data = JSON.parse(localStorage.getItem("userProfiles"));
        try {
            if (data == null)
                throw "Profile data missing"
            else {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].identifiers.profileId == profileId) {
                        profile = data[i];
                        break;
                    }
                }
                if (profile == null)
                    throw "Profile could not be found"
            }
        } catch (err) {
            throw err;
        }
        return profile;
    }
} 
export default UserProfile;
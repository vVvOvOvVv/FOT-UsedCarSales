import Data from "../data/Data.js" 

class UserProfile{   
    static lastProfileId = 1;
    
    init() { 
        if (UserProfile.lastProfileId == null)
            UserProfile.lastProfileId = 1;
    }

    submitUP(role, roleDesc) {
        this.init();
        // attempt to enter into the JSON 
        var isSuccess = true;
        var profileId = UserProfile.lastProfileId++;

        var data = { 
            "identifiers": 
                {"profileId": profileId}, 
            "entityInformation":
                {"role": role, 
                "roleDescription": roleDesc,
                "status": "active"
        }}
        try {
            this.writeJSON(data);   
        } catch (err) {  
            isSuccess = false; 
            throw err;
        } finally {
            return isSuccess;
        }
    } 

    getProfiles() {
        if (Data.userProfiles == null)
                return null;
        else
            return Data.userProfiles;
    }

    updateUP(profileId, role, roleDesc) {
        var profile;
        var successFlag = true;
        for (var i = 0; i < Data.userProfiles.length; i++) {
            if (profileId == Data.userProfiles[i].identifiers.profileId) {
                profile = Data.userProfiles[i];
                break;
            }
        }

        try {
            if (profile != null) {
                if (role != "")
                    profile.entityInformation.role = role;
                if (roleDesc != "")
                    profile.entityInformation.roleDescription = roleDesc;
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
        for (var i = 0; i < Data.userProfiles.length; i++) {
            if (profileId == Data.userProfiles[i].identifiers.profileId) {
                profile = Data.userProfiles[i];
                break;
            }
        }

        try {
            if (profile != null) {
                if (profile.entityInformation.status == "suspended")
                    throw `Profile with ID ${profileId} is already suspended`;
                else
                    profile.entityInformation.status = "suspended";
            } else
                throw `Profile with ID ${profileId} could not be found`;
        } catch (err) {
            successFlag = false;
            throw err;
        }
        return successFlag;
    }

    writeJSON(data) {  
        // write data into JSON
        try {
            Data.userProfiles.push(data);
        } catch (err) {  
            throw "Unable to write to JSON"; 
        } 
    }
} 
export default UserProfile;
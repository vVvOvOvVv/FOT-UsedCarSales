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
                "roleDescription": roleDesc
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
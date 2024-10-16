import Entity from "./UseCaseEntity.js"; 

class UserProfile extends Entity {
    static lastProfileId = 0;
    profileId;

    constructor(role, roleDesc) {
        super();
        this.profileId = UserProfile.lastProfileId++;
        this.role = role;
        this.roleDesc = roleDesc; 
    }
    submitUP() {
        // attempt to enter into the JSON 
        var isSuccess = true;
        var data = {
            "entityType": "userProfile",
            "identifiers": [{"profileId": this.profileId}],
            "displayName": this.displayName,
            "location": this.location,
            "role": this.role, // should mainly just be role
            "phone": this.phone,
            "email": this.email
        }
        try {
            this.writeJSON(data);   
        } catch (err) { 
            isSuccess = false;
            throw err;
        } finally {
            return isSuccess;
        }
    }
}

export default UserProfile;
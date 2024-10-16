import Entity from "./UseCaseEntity.js"; 

class UserProfile extends Entity {
    static lastProfileId = 0;
    profileId;

    constructor(displayName, location, role, phone, email) {
        super();
        this.displayName = displayName;
        this.profileId = UserProfile.lastProfileId++;
        this.location = location;
        this.role = role;
        this.phone = phone;
        this.email = email;
    }
    static submitUP(p) {
        // check if the values of p are valid
        var isSuccess = true;
        if (p.displayName.length <= 0) {
            console.error("ERROR: display name cannot be empty");
            isSuccess = false;
        } // location can be private/omitted
        if (p.role <= 0) {
            console.error("ERROR: role cannot be empty");
            isSuccess = false;
        }
        if (p.phone <= 0) {
            console.error("ERROR: phone number cannot be empty");
            isSuccess = false;
        } else if (!p.isNumeric(p.phone)) {
            console.error("ERROR: phone number cannot contain alphabet or special characters");
            isSuccess = false;
        } 
        if (p.email <= 0) {
            console.error("ERROR: email cannot be empty");
            isSuccess = false;
        }
        // attempt to enter into the JSON
        if (isSuccess) {// no error found yet
            var data = {
                "entityType": "userProfile",
                "identifiers": [{"profileId": p.profileId}],
                "displayName": p.displayName,
                "location": p.location,
                "role": p.role,
                "phone": p.phone,
                "email": p.email
            }
            try {
                Entity.writeJSON(data); 
                console.log("Success!!")
            } catch (err) {
                isSuccess = false;
                console.error("From child entity: " + err);
            }
        } 
        console.log("entity: " + isSuccess)
        return isSuccess;
    }
}

export default UserProfile;
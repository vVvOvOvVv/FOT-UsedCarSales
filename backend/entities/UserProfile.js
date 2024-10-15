class UserProfile {
    constructor(displayName, location, role, phone, email) {
        this.displayName = displayName;
        this.location = location;
        this.role = role;
        this.phone = phone;
        this.email = email;
    }
    static submitUP(p) {
        // check if the values of p are valid
        // enter into the database/file storing data if success
        return true; // temp return
    }
}

export default UserProfile;
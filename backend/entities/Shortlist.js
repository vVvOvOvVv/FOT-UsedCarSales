import Data from "../data/Data.js" 
/* example structure ===================================
static shortlists = [
        {"identifiers":
            {"accountId": 0}, // each account will have a shortlist, containing 0+ cars 
        "entityInformation":
            {"cars": [{"carId": "a1"}]}
    }];
*/

class Shortlist {
    saveUsedCar(carId) {
        try {
            var successFlag = true;
            if (Data.shortlists == null)
                throw "Data could not be found";

            var shortlistsExists = false;
            Data.shortlists.forEach(shortlist => {
                if (shortlist.identifiers.accountId == Data.currentUser) {
                    // shortlist for this user exists
                    shortlistsExists = true;
                    // check if car has already been shortlisted
                    for (var i = 0; i < shortlist.entityInformation.cars.length; i++) {
                        if (shortlist.entityInformation.cars[i].carId == carId) 
                            throw `You have already shortlisted Car ${carId}`;
                    }
                    shortlist.entityInformation.cars.push({"carId": carId});
                }
            });
            if (!shortlistsExists) {
                // create new shortlist for this user
                Data.shortlists.push({
                    "identifiers": {"accountId": Data.currentUser},
                    "entityInformation":
                        {"cars": [{"carId": carId}]}
                });
            }
        } catch (err) {
            successFlag = false;
            throw err; // propagate to boundary
        }
        return successFlag;
    }

    getShortlist() {
        try {
            var shortlistedCars;
            if (Data.shortlists == null)
                throw "Data could not be found";
            var shortlistsExists = false;
            for (var i = 0; i < Data.shortlists.length; i++) {
                if (Data.shortlists[i].identifiers.accountId == Data.currentUser) {
                    shortlistsExists = true;
                    shortlistedCars = Data.shortlists[i].entityInformation.cars;
                    break;
                }
            }
            if (!shortlistsExists)
                throw "No cars have been shortlisted";
        } catch (err) {
            throw err; // propagate to boundary
        }
        return shortlistedCars;
    }
}
export default Shortlist;
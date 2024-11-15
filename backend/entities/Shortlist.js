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
            var data = JSON.parse(localStorage.getItem("shortlists"));
            if (data == null)
                throw "Data could not be found";

            var shortlistsExists = false;
            data.forEach(shortlist => {
                if (shortlist.identifiers.accountId == localStorage.getItem("currentUser")) {
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
                data.push({
                    "identifiers": {"accountId": localStorage.getItem("currentUser")},
                    "entityInformation":
                        {"cars": [{"carId": carId}]}
                });
            }
            localStorage.setItem("shortlists", JSON.stringify(data));
        } catch (err) {
            successFlag = false;
            throw err; // propagate to boundary
        }
        return successFlag;
    }

    getShortlist() {
        try {
            var shortlistedCars;
            var data = JSON.parse(localStorage.getItem("shortlists"));
            if (data == null)
                throw "Data could not be found";
            var shortlistsExists = false;
            for (var i = 0; i < data.length; i++) {
                if (data[i].identifiers.accountId == localStorage.getItem("currentUser")) {
                    shortlistsExists = true;
                    shortlistedCars = data[i].entityInformation.cars;
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

    getNumOfShortlists(carId) {
        try {
            var num = 0;
            var data = JSON.parse(localStorage.getItem("shortlists"));
            if (data == null)
                throw "Data could not be found";
            data.forEach(shortlist => {
                shortlist.entityInformation.cars.forEach(car => {
                    if (car.carId == carId)
                        num++;
                });
            });
        } catch (err) {
            throw err; // propagate to boundary
        }
        return num;
    }
}
export default Shortlist;
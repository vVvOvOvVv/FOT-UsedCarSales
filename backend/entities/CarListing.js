import Data from "../data/Data.js" 
/* example structure ===================================
static carListing = [
        {"identifiers":
            {"carId": "a1" // liscense plate},
            "entityInformation": // keep simple, no need to bloat
            {"brand": "Toyota",
            "model": "Prius",
            "mileage": 1000, // in km
            "year manufactured": 2015,
            "price": 500,
            "carSeller": "b1",
            "carAgent": "c1",
            "views": 1}
    }];
*/

class CarListing {
    static lastCarId = 1; // carListing with id 0 already exists in Data
    
    init() { 
        if (CarListing.lastCarId == null)
            CarListing.lastCarId  = 1; // carListing with id 0 already exists in Data 
    }

    submitCL(brand, model, mileage, year, price, seller, agent, status) {
        this.init();
        var successFlag = true;
        var carId = lastCarId++;

        try {
            var data = {
                "identifiers":
                {"carId": carId},
                "entityInformation":
                {"brand": brand,
                "model": model,
                "mileage": mileage,
                "year manufactured": year,
                "price": price,
                "carSeller": seller,
                "carAgent": agent,
                "status": status.toLowerCase(),
                "views": 1}
            };
            this.writeJSON(data)
        } catch (err) {
            successFlag = false;
            throw (err);
        }
        return successFlag;
    }

    viewCL() {
        var cars = [];

        try {
            if (Data.carListing == null)
                throw "Data could not be found"
            else {
                for (var i = 0; i < Data.carListing.length; i++) {
                    console.log(JSON.stringify(Data.carListing[i]));
                    if (Data.carListing[i].entityInformation.carAgent == Data.currentUser)
                        cars.push(Data.carListing[i]);
                }
            }
        } catch (err) {
            throw err; // propagate to boundary
        }
        return cars;
    }

    updateCL(carId, brand, model, mileage, year, price, seller, agent, status) {
        try {
            var foundFlag = false;
            if (Data.carListing == null)
                throw "Data could not be found";
            else { // search for car withID carId
                for (var i = 0; i < Data.carListing.length; i++) {
                    if (Data.carListing[i].identifiers.carId == carId.toString()) {
                        foundFlag = true;
                        var carData = Data.carListing[i];
                        // change  - only if values aren't empty
                        if (brand == "" & model == "" & mileage == "" &
                            year == "" & price == "" & seller == "" &
                            agent == "" & status == "")
                            throw "At least one field must be filled";
                        if (brand != "" & brand != null)
                            carData.entityInformation.brand = brand;
                        
                        if (model != "" & model != null)
                            carData.entityInformation.model = model;
                        
                        if (mileage != "" & mileage != null)
                            carData.entityInformation.mileage = mileage;
                        
                        if (year != "" & year != null)
                            carData.entityInformation.year = year;
                        
                        if (price != "" & price != null)
                            carData.entityInformation.price = price;
                        
                        if (seller != "" & seller != null)
                            carData.entityInformation.seller = seller;
                        
                        if (agent != "" & agent != null)
                            carData.entityInformation.agent = agent;
                        
                        if (status != "" & status != null)
                            carData.entityInformation.status = status;
                        return true;
                    }
                }
                if (!foundFlag)
                    throw `Car with ID ${carId} could not be found`;
            }
        } catch (err) {
            throw err; // propagate to boundary
        }
        return false;
    }

    deleteCL(carId) {
        var successFlag = false;
        try {
            if (Data.carListing == null)
                throw "Data could not be found";
            for (var i = 0; i < Data.carListing.length; i++) {
                if (Data.carListing[i].identifiers.carId == carId) {
                    Data.carListing.splice(i, 1);
                    successFlag = true;
                }
            }
            if (!successFlag)
                throw `Car with ID ${carId} could not be found`;
        } catch (err) {
            throw err; // propagate to boundary
        }
        return successFlag;
    }

    getCarDetails(carId) {
        var car;
        var successFlag;
        try {
            if (Data.carListing == null)
                throw "Data could not be found";
            for (var i = 0; i < Data.carListing.length; i++) {
                if (Data.carListing[i].identifiers.carId == carId) { 
                    car = JSON.stringify(Data.carListing[i]);
                    successFlag = true;
                }
            }
            if (!successFlag)
                throw `Car with ID ${carId} could not be found`;
        } catch (err) {
            throw err; //propagate to boundary
        }
        return car;
    }

    writeJSON(data) {
        try {
            Data.carListing.push(data)
        } catch (err) {
            throw "Unable to write to JSON";
        }
    }
}

export default CarListing;
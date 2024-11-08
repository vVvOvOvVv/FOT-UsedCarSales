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

    writeJSON(data) {
        try {
            Data.carListing.push(data)
        } catch (err) {
            throw "Unable to write to JSON";
        }
    }
}
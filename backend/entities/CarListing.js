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
}
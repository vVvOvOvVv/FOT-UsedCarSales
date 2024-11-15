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
    init() { 
        if (localStorage.getItem("nextCarId") == null)
            localStorage.setItem("nextCarId", 100);
    }

    submitCL(brand, model, mileage, year, price, seller, agent, status) {
        this.init();
        var successFlag = true;
        var carId = localStorage.getItem("nextCarId");

        try {
            var data = {
                "identifiers":
                {"carId": carId},
                "entityInformation":
                {"brand": brand,
                "model": model,
                "mileage": mileage,
                "year": year,
                "price": price,
                "carSeller": seller,
                "carAgent": agent,
                "status": status.toLowerCase(),
                "views": 1}
            };
            localStorage.setItem("nextCarId", ++carId);
            var savedData = JSON.parse(localStorage.getItem("carListing"));
            savedData.push(data)
            localStorage.setItem("carListing", JSON.stringify(savedData));
        } catch (err) {
            successFlag = false;
            throw (err);
        }
        return successFlag;
    }

    viewCL() {
        var cars = [];

        try {
            var data = JSON.parse(localStorage.getItem("carListing"));
            if (data == null)
                throw "Data could not be found"
            else {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].entityInformation.carAgent == localStorage.getItem("currentUser"))
                        cars.push(data[i]);
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
            var data = JSON.parse(localStorage.getItem("carListing"));
            if (data == null)
                throw "Data could not be found";
            else { // search for car withID carId
                for (var i = 0; i < data.length; i++) {
                    if (data[i].identifiers.carId == carId.toString()) {
                        foundFlag = true;
                        var carData = data[i];
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
                        data[i] = carData;
                        localStorage.setItem("carListing", JSON.stringify(data));
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
        var data = JSON.parse(localStorage.getItem("carListing"));
        try {
            if (data == null)
                throw "Data could not be found";
            for (var i = 0; i < data.length; i++) {
                if (data[i].identifiers.carId == carId) {
                    data.splice(i, 1);
                    localStorage.setItem("carListing", JSON.stringify(data));
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
        var successFlag = false;
        var data = JSON.parse(localStorage.getItem("carListing"));
        try {
            if (data== null)
                throw "Data could not be found";
            for (var i = 0; i < data.length; i++) {
                if (data[i].identifiers.carId == carId) { 
                    car = JSON.stringify(data[i]);
                    data[i].entityInformation.views++;
                    localStorage.setItem("carListing", JSON.stringify(data));
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

    searchUC() {
        var cars;
        var data = JSON.parse(localStorage.getItem("carListing"));
        try {
            if (data == null)
                throw "Data could not be found";
            if (data.length == 0)
                throw "No cars in the database";
            cars = data;
        } catch (err) {
            throw err; // propagate to boundary
        }
        return cars;
    }

    calculateL(carId) {
        var price;
        var data = JSON.parse(localStorage.getItem("carListing"));
        var successFlag = false;
        try {
            if (data == null)
                throw "Data could not be found";
            if (data.length == 0)
                throw "No cars in the database";
            for (var i = 0; i < data.length; i++) {
                if (data[i].identifiers.carId == carId) {
                    successFlag = true;
                    price = data[i].entityInformation.price;
                    break;
                }
            }
            if (!successFlag)
                throw `Car with ID ${carId} could not be found`;
        } catch (err) {
            throw err; // propagate to boundary
        }
        return price;
    }

    getViews(carId) {
        try {
            var data = JSON.parse(localStorage.getItem("carListing"));
            var views;
            if (data == null)
                throw "Data could not be found";
            if (data.length == 0)
                throw "No cars in the database";
            var foundFlag = false;
            for (var i = 0; i < data.length; i++) {
                var car = data[i];
                if (car.identifiers.carId == carId) {
                    foundFlag = true;
                    views = car.entityInformation.views;
                }
            }
            if (!foundFlag)
                throw `Car with ID ${carId} could not be found`;
        } catch (err) {
            throw err; // propagate to boundary
        }
        return views;
    }
}

export default CarListing;
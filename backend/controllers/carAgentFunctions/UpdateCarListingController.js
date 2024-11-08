import CarListing from "../../entities/CarListing.js";

class UpdateCarListingController {
    updateCarListing(carId, brand, model, mileage, year, price, seller, agent, status) {
        var l = new CarListing();
        return l.updateCL(carId, brand, model, mileage, year, price, seller, agent, status);
    }
}
export default UpdateCarListingController;
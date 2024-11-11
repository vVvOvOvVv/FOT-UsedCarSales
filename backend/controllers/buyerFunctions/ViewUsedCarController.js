import CarListing from "../../entities/CarListing.js"

class ViewUsedCarController {
    viewUsedCar(carId) {
        var l = new CarListing();
        return JSON.parse(l.getCarDetails(carId));
    }
}
export default ViewUsedCarController;
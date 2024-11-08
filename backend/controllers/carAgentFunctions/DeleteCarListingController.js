import CarListing from "../../entities/CarListing.js"

class DeleteCarListingController {
    deleteCarListing(carId) {
        var l = new CarListing();
        return l.deleteCL(carId);
    }
}
export default DeleteCarListingController;
import CarListing from "../../entities/CarListing.js"

class DisplayViewsController {
    noOfViews(carId) {
        var l = new CarListing();
        return l.getViews(carId);
    }
}
export default DisplayViewsController;
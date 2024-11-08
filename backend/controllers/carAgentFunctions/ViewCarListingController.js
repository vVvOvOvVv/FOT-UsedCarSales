import CarListing from "../../entities/CarListing.js";

class ViewCarListingController {
    viewCarListing() {
        var l = new CarListing();
        return l.viewCL();
    }
}

export default ViewCarListingController;
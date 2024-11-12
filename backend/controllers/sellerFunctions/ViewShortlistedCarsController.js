import Shortlist from "../../entities/Shortlist.js";

class ViewShortlistedCarsController {
    noOfShortlisted(carId) {
        var s = new Shortlist();
        return s.getNumOfShortlists(carId);
    }
}
export default ViewShortlistedCarsController;
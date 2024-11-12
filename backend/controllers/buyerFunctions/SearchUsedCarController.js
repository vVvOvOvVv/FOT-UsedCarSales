import CarListing from "../../entities/CarListing.js";

class SearchUsedCarController {
    searchUsedCar() {
        var l = new CarListing();
        return l.searchUC();
    }
}
export default SearchUsedCarController;
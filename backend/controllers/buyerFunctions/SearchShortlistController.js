import Shortlist from "../../entities/Shortlist.js";

class SearchShortlistController {
    searchShortlist(carId) {
        try {
            var foundFlag = false;
            var car;
            var s = new Shortlist();
            var shortlistArr = s.getShortlist();
            if (shortlistArr != null) {
                for (var i = 0; i < shortlistArr.length; i++) {
                    if (shortlistArr[i].carId == carId) {
                        foundFlag = true;
                        car = shortlistArr[i];
                    }
                }
            }
            if (!foundFlag)
                throw `Car with ID ${carId} could not be found`;
        } catch (err) {
            throw err; // propagate to boundary
        }
        return car;
    }
}
export default SearchShortlistController;
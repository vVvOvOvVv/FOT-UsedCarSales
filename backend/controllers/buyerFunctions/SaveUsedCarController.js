import Shortlist from "../../entities/Shortlist.js";

class SaveUsedCarController {
    saveUsedCar(carId) {
        var s = new Shortlist();
        return s.saveUsedCar(carId);
    }
}
export default SaveUsedCarController;
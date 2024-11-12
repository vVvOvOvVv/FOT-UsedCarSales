import CarListing from "../../entities/CarListing.js";

class CalculateLoan {
    calculateLoan(carId) {
        var l = new CarListing();
        return l.calculateL(carId);
    }
}
export default CalculateLoan;
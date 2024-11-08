import CarListing from "../../entities/CarListing.js"

class SubmitCarListingsController {
    submitCarListing(
        brand, model, mileage, year, price, seller, agent, status
    ) {
        var l = new CarListing();
        return l.submitCL(brand, model, mileage, year, price, seller, agent, status)
    }
}

export default SubmitCarListingsController;
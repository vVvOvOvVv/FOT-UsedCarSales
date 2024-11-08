import UpdateCarListingController from "../../controllers/carAgentFunctions/UpdateCarListingController.js"
import Boundary from "../UseCaseBoundary.js"

class UpdateCarListingUI extends Boundary {
    onUpdate() {
        var successFlag = true;
        try {
            // fetch values
            var carId = document.getElementById("carId").value;
            if (carId == "")
                throw "Car ID cannot be left empty";

            var brand = document.getElementById("brand").value;
            var model = document.getElementById("model").value;
            var mileage = document.getElementById("mileage").value;
            var year = document.getElementById("year").value;
            var price = document.getElementById("price").value;
            var seller = document.getElementById("seller").value;
            var agent = document.getElementById("agent").value;
            var status = document.getElementById("status").value;

            // attempt to update
            var controller = new UpdateCarListingController();
            successFlag = controller.updateCarListing(
                carId, brand, model, mileage, year, price, seller, agent, status
            );
        } catch (err) {
            successFlag = false;
            this.displayError(err);
        }

        if (successFlag)
            this.displaySuccess();
    }
}

var updateCarUI = new UpdateCarListingUI();
document.getElementById("submit").addEventListener("click", () => {
    updateCarUI.onUpdate();
})
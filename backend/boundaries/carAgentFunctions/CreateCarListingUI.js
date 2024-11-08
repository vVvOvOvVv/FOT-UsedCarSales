import SubmitCarListingsController from "../../controllers/carAgentFunctions/SubmitCarListingsController.js";
import Boundary from "../UseCaseBoundary.js"

class CreateCarListingsController extends Boundary {
    onSubmit() {
        var successFlag = true;

        try {
            var brand = document.getElementById("brand").value;
            var model = document.getElementById("model").value;
            var mileage = document.getElementById("mileage").value;
            var year = document.getElementById("year").value;
            var price = document.getElementById("price").value;
            var seller = document.getElementById("seller").value;
            var agent = document.getElementById("agent").value;
            var status = document.getElementById("status").value;

            if (brand == "")
                throw "Brand cannot be left empty";
            if (model == "")
                throw "Model cannot be left empty";
            if (mileage == "")
                throw "Mileage cannot be left empty";
            if (year == "")
                throw "Year cannot be left empty";
            if (price == "")
                throw "Price cannot be left empty";
            if (seller == "" )
                throw "Seller cannot be left empty";
            if (agent == "")
                throw "Agent cannot be left empty";
            if (status == "")
                throw "Status cannot b left empty";

            var controller = new SubmitCarListingsController();
            successFlag = controller.submitCarListing(
                brand, model, mileage, year, price, seller, agent, status
            );

        } catch (err) {
            this.displayError(err);
            successFlag = false;
        }

        if (successFlag)
            this.displaySuccess();
    }
}

const createCarListingUI = new CreateCarListingsController();
document.getElementById("submit").addEventListener("click", () => {
    createCarListingUI.onSubmit();
}); 
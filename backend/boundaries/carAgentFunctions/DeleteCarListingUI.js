import DeleteCarListingController from "../../controllers/carAgentFunctions/DeleteCarListingController.js";
import Boundary from "../UseCaseBoundary.js"

class DeleteCarListingUI extends Boundary {
    onDelete() {
        var successFlag = true;
        try {
            var carId = document.getElementById("carId").value;

            if (carId == "" | carId == null)
                throw "Please enter a Car ID to delete";
            var controller = new DeleteCarListingController()
            successFlag = controller.deleteCarListing(carId);
            if (successFlag) {
                successFlag = 
                    confirm(`Are you sure you would like to delete car ${carId}?`);
            }
        } catch (err) {
            successFlag = false;
            this.displayError(err);
        }
        if (successFlag)
            this.displaySuccess();
    }
}
var deleteCarUI = new DeleteCarListingUI();
document.getElementById("delete").addEventListener("click", () => {
    deleteCarUI.onDelete();
})
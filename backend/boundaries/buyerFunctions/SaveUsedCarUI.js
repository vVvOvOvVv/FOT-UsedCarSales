import SaveUsedCarController from "../../controllers/buyerFunctions/SaveUsedCarController.js";

class SavedUsedCarUI {
    static carId;

    saveUsedCar() {
        try {
            if (carId == null)
                throw "Unable to shortlist";
            var controller = new SaveUsedCarController();
            var successFlag = controller.saveUsedCar(SavedUsedCarUI.carId);
            if (successFlag)
                alert(`Car ${SavedUsedCarUI.carId} shortlisted!`);
        } catch (err) {
            alert(err);
            console.error(err);
        }
    }
}

var shortlistCar = new SavedUsedCarUI();
var arr = Array.from(document.getElementsByClassName("shortlist-btn"));
if (arr == null)
    alert("No shortlist buttons found");
else {
    arr.forEach(btn => {
        btn.addEventListener("click", () => {
            SavedUsedCarUI.carId = +btn.dataset.carId; // pass data to the class
            shortlistCar.saveUsedCar();
        })
    });
}
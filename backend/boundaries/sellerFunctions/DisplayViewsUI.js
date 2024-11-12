import DisplayViewsController from "../../controllers/sellerFunctions/DisplayViewsController.js";

class DisplayViewsUI {
    displayViews() {
        try {
            var carId = document.getElementById("carId").value;
            if (carId == "")
                throw "Please enter a Car ID"
            var controller = new DisplayViewsController();
            var views = controller.noOfViews(carId);

            const carList = document.getElementById('carList');
            const carItem = document.createElement('li');
            carItem.classList.add('car-item');
            carList.innerHTML = '';  // Clear the list firstconst carItem = document.createElement('li');
            carItem.classList.add('car-item');
            carItem.innerHTML = `
                <h3>Car ID: ${carId}</h3>
                <img src="../../../frontend/assets/placeholder.png" alt="Car" class="car-img">
                <p class="view-count"><i class="fas fa-eye"></i> Views: <span>${views}</span></p>
            `;
            carList.appendChild(carItem);
        } catch (err) {
            console.error(err);
            alert(err);
        }
    }
}
var displayUI = new DisplayViewsUI();
document.getElementById("seeViews").addEventListener("click", () => {
    displayUI.displayViews();
})
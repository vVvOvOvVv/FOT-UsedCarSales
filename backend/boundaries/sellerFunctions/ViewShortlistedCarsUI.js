import ViewShortlistedCarsController from "../../controllers/sellerFunctions/ViewShortlistedCarsController.js";

class ViewShortlistedCarsUI {
    displayShortlisted() {
        try {
            var carId = document.getElementById("carId").value;
            if (carId == "")
                throw "Please enter a Car ID";
            var controller = new ViewShortlistedCarsController();
            var num = controller.noOfShortlisted(carId);
            
            const carList = document.getElementById('carList');
            carList.innerHTML = '';  // Clear the list first
            const carItem = document.createElement('li');
            carItem.classList.add('car-item');
            carItem.innerHTML = `
                <h3>Car ID: ${carId}</h3>
                <img src="../../../frontend/assets/placeholder.png" alt="Car" class="car-img">
                <p class="view-count"><i class="fas fa-heart"></i> Shortlisted: <span>${num}</span></p>
            `;
            carList.appendChild(carItem);
        } catch (err) {
            console.error(err);
            alert(err);
        }
    }
}
var viewUI = new ViewShortlistedCarsUI();
document.getElementById("seeViews").addEventListener("click", () => {
    viewUI.displayShortlisted();
})
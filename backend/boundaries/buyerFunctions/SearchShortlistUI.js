import SearchShortlistController from "../../controllers/buyerFunctions/SearchShortlistController.js";
import Boundary from "../UseCaseBoundary.js";

class SearchShortlistUI extends Boundary{
    onSearch() {
        try {
            var carId = document.getElementById("carId-shortlist").value;
            if (carId == "")
                throw "Please enter a Car ID";
            var controller = new SearchShortlistController();
            var car = controller.searchShortlist(carId);
            var container = document.getElementById('shortlist-container');
            if (container == null)
                throw "Error with display";

            if (car != null) {
                container.innerHTML = ""; // reset display
                
                var carCard = document.createElement("div");
                carCard.classList.add('car-card');
                var carImage = document.createElement('img');
                carImage.src = "../../../frontend/assets/placeholder.png";
                carCard.appendChild(carImage);
                var carId = document.createElement('h3');
                var text = document.createTextNode(`Car ID: ${car.carId}`);
                carId.appendChild(text);
                carCard.appendChild(carId);
            
                // // Create a delete button for each car
                // var deleteButton = document.createElement('button');
                // deleteButton.textContent = 'Delete';
                // deleteButton.classList.add('delete-btn');
                // deleteButton.dataset.carId = car.carId;
                // carCard.appendChild(deleteButton);
            
                container.appendChild(carCard);

                this.displaySuccess();
                window.open("../../../frontend/User Admin/AdminHomePage.html", "__self");
            }
            
        } catch (err) {
            this.displayError(err);
        }
    }
}
var searchUI = new SearchShortlistUI();
document.getElementById("search").addEventListener("click", () => {
    searchUI.onSearch();
})
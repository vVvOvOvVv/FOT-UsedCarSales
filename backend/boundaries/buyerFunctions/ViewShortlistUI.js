import ViewShortlistController from "../../controllers/buyerFunctions/ViewShortlistController.js";

class ViewShortlistUI {
    displayShortlist() {
        var controller = new ViewShortlistController();
        var shortlist = controller.viewShortlist();

        try {
            if (shortlist != null) {
                var container = document.getElementById('shortlist-container');
                if (container == null)
                    throw "Error with display";
            
                shortlist.forEach(car => {
                    var carCard = document.createElement("div");
                    carCard.classList.add('car-card');

                    var carImage = document.createElement('img');
                    carImage.src = "../../../frontend/assets/placeholder.png";
                    carCard.appendChild(carImage);

                    var carId = document.createElement('h3');
                    var text = document.createTextNode(`Car ID: ${car.carId}`);
                    carId.appendChild(text);
                    carCard.appendChild(carId);
                
                    // Create a delete button for each car
                    var deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.classList.add('delete-btn');
                    deleteButton.dataset.carId = car.carId;
                    carCard.appendChild(deleteButton);
                
                    container.appendChild(carCard);
                });
            }
        } catch (err) {
            console.error(err);
            alert(err);
        }
    }
}
var viewShortlistUI = new ViewShortlistUI();
document.getElementById("shortlist-container").addEventListener("load", (viewShortlistUI.displayShortlist()));
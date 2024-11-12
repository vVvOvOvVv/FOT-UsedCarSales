import SearchUsedCarController from "../../controllers/buyerFunctions/SearchUsedCarController.js";
import Boundary from "../UseCaseBoundary.js"

class SearchUsedCarUI extends Boundary {
    searchUsedCar() {
        try {
            var controller = new SearchUsedCarController();
            var cars = controller.searchUsedCar(); // fetch array of car listings

            // create element
            cars.forEach(car => {
                var box = document.createElement("div");
                box.className = "box";
                // image
                var image = document.createElement("div");
                image.className = "box-img";
                var img = document.createElement("img");
                img.alt = "Car image";
                img.src = "../../../frontend/assets/placeholder.png";
                image.appendChild(img);
                // car information
                var carInfo = document.createElement("h3");
                var text = document.createTextNode(
                    `${car.entityInformation.brand} - ${car.entityInformation.model}`
                );
                carInfo.appendChild(text);
                var carId = document.createElement("p");
                text = document.createTextNode(`Car ID: ${car.identifiers.carId}`);
                carId.appendChild(text);
                var year = document.createElement("p");
                text = document.createTextNode(`Year Manufactured: ${car.entityInformation.year}`);
                year.appendChild(text);
                var sellerAgent = document.createElement("p");
                text = document.createTextNode(`Seller ID: ${car.entityInformation.carSeller}\n` + 
                    `Agent ID: ${car.entityInformation.carAgent}`
                );
                sellerAgent.appendChild(text);
                var status = document.createElement("p");
                text = document.createTextNode(`Status: ${car.entityInformation.status}`);
                status.appendChild(text);
                // buttons
                const btnContainer = document.createElement('div');
                btnContainer.classList.add('btn-container');
                const shortlistBtn = document.createElement('a');
                shortlistBtn.textContent = 'Shortlist';
                shortlistBtn.classList.add('btn', 'shortlist-btn');
                shortlistBtn.dataset.carId = car.identifiers.carId;
                btnContainer.appendChild(shortlistBtn);
                // append to box
                box.appendChild(image);
                box.appendChild(carInfo);
                box.appendChild(carId);
                box.appendChild(year);
                box.appendChild(sellerAgent);
                box.appendChild(status);
                box.appendChild(btnContainer);
                // append to page
                document.getElementById("services").appendChild(box);
            });
        } catch (err) {
            console.log(err);
        }
    }
}
var searchCarUI = new SearchUsedCarUI();
document.getElementById("carId").addEventListener("load", (searchCarUI.searchUsedCar()));
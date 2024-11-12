import ViewUsedCarController from "../../controllers/buyerFunctions/ViewUsedCarController.js";
import Boundary from "../UseCaseBoundary.js";

class ViewUsedCarUI extends Boundary {
    displayUsedCar() {
        try {
            var carId = document.getElementById("carId").value;

            if (carId == "")
                throw "Please enter a car ID";

            var controller = new ViewUsedCarController();
            var car = controller.viewUsedCar(carId);

            // form display
            if (car != null) {
                var results = document.getElementById("searchResults");
                if (results == null)
                    throw "Error with display";
                
                var box = document.createElement("div");
                box.className = "box";

                var header = document.createElement("h3");
                header.innerHTML = `Search Results (Car ID ${carId})`;
                var image = document.createElement("div");
                image.className = "box-img";
                var img = document.createElement("img");
                img.alt = "Car image";
                img.src = "../../../frontend/assets/placeholder.png";
                image.appendChild(img);
                
                // info
                var list = document.createElement("ul");
                var brand = document.createElement("li");
                var text = document.createTextNode(`Brand: ${car.entityInformation.brand}`);
                brand.appendChild(text);
                var model = document.createElement("li");
                var text = document.createTextNode(`Model: ${car.entityInformation.model}`);
                model.appendChild(text);
                var mileage = document.createElement("li");
                var text = document.createTextNode(`Mileage: ${car.entityInformation.mileage}`);
                mileage.appendChild(text);
                var year = document.createElement("li");
                var text = document.createTextNode(`Year manufactured: ${car.entityInformation.year}`);
                year.appendChild(text);
                var price = document.createElement("li");
                var text = document.createTextNode(`Price: SGD${car.entityInformation.price}`);
                price.appendChild(text);
                var carSeller = document.createElement("li");
                var text = document.createTextNode(`Seller: ${car.entityInformation.carSeller}`);
                carSeller.appendChild(text);
                var carAgent = document.createElement("li");
                var text = document.createTextNode(`Agent: ${car.entityInformation.carAgent}`);
                carAgent.appendChild(text);
                var status = document.createElement("li");
                var text = document.createTextNode(`Status: ${car.entityInformation.status}`);
                status.appendChild(text);
                var views = document.createElement("li");
                var text = document.createTextNode(`Views: ${car.entityInformation.views}`);
                views.appendChild(text);
                // append to list
                list.appendChild(header);
                list.appendChild(image);
                list.appendChild(brand);
                list.appendChild(model);
                list.appendChild(mileage);
                list.appendChild(year);
                list.appendChild(price);
                list.appendChild(carSeller);
                list.appendChild(carAgent);
                list.appendChild(status);
                list.appendChild(views);
                list.style.color = "black";
                // add to display
                box.appendChild(list);
                results.appendChild(box);
                console.log(results);
            }
        } catch (err) { 
            console.log(err);
            alert(err);
        }
    }
}

var viewCarUI = new ViewUsedCarUI();
document.getElementById("viewDetails").addEventListener("click", () => {
    viewCarUI.displayUsedCar();
});
import ViewCarListingController from "../../controllers/carAgentFunctions/ViewCarListingController.js";
import Boundary from "../../boundaries/UseCaseBoundary.js"

class ViewCarListingUI extends Boundary {
    displayPage() {
        try {
            // fetch car listings
            var body = document.getElementById("header");
            var controller = new ViewCarListingController();
            var cars = controller.viewCarListing();

            if (cars.length == 0)
                throw "No cars have been listed";
            for (var i = 0; i < cars.length; i++) {
                console.log(JSON.stringify(cars[i]));
                var carList = document.createElement("div");
                carList.className = "container-fluid";
                // TRY and center
                carList.style.position = "relative";
                carList.style.left = "32.5%";
                carList.style.right = "32.5%";

                var list = document.createElement("ul");
                // brand
                var brandItem = document.createElement("li");
                var text = document.createTextNode(`Brand: ${cars[i].entityInformation.brand}`);
                brandItem.appendChild(text);
                // model
                var modelItem = document.createElement("li");
                text = document.createTextNode(`Model: ${cars[i].entityInformation.model}`);
                modelItem.appendChild(text);
                // mileage
                var mileItem = document.createElement("li");
                text = document.createTextNode(`Mileage: ${cars[i].entityInformation.mileage}`);
                mileItem.appendChild(text);
                // manufacturing year
                var yrItem = document.createElement("li");
                text = document.createTextNode(`Year manufactured: ${cars[i].entityInformation.year}`);
                yrItem.appendChild(text);
                // price
                var priceItem = document.createElement("li");
                text = document.createTextNode(`Price (SGD): ${cars[i].entityInformation.price}`);
                priceItem.appendChild(text);
                // seller
                var sellerItem = document.createElement("li");
                text = document.createTextNode(`Seller ID: ${cars[i].entityInformation.carSeller}`);
                sellerItem.appendChild(text);
                // model
                var agentItem = document.createElement("li");
                text = document.createTextNode(`Agent ID: ${cars[i].entityInformation.carAgent}`);
                agentItem.appendChild(text);
                // append to the list
                list.appendChild(brandItem);
                list.appendChild(modelItem);
                list.appendChild(mileItem);
                list.appendChild(yrItem);
                list.appendChild(priceItem);
                list.appendChild(sellerItem);
                list.appendChild(agentItem);
                // append to container
                carList.appendChild(list);
                // append to page
                body.insertAdjacentElement("afterend", carList);
            }
        } catch (err) {
            console.error(err);
            alert(err);
        }
    }
}

const viewCLUI = new ViewCarListingUI();
window.addEventListener("load", viewCLUI.displayPage);
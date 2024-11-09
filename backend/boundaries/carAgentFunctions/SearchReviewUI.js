import SearchReviewController from "../../controllers/carAgentFunctions/SeachReviewController.js";
import Boundary from "../UseCaseBoundary.js"

class SearchReviewUI extends Boundary {
    searchReview() {
        try {
            var formContainer = document.getElementById("form");
            if (formContainer == null)
                throw "Form Container not found, error loading"
            var brand = document.getElementById("brand").value.toLowerCase();
            if (brand == null | brand == "")
                throw "Please enter a brand name";

            var controller = new SearchReviewController();
            var reviews = controller.searchReview(brand);
            for (var i = 0; i < reviews.length; i++) {
                var reviewDiv = document.createElement("div");
                reviewDiv.className = "searchResult form-container";
                var list = document.createElement("ul");
                // list items
                var ratingItem = document.createElement("li");
                var textItem = document.createTextNode(`Rating: ${reviews[i].rating}`);
                ratingItem.appendChild(textItem);
                var reviewItem = document.createElement("li");
                textItem = document.createTextNode(`Review: ${reviews[i].review}`);
                reviewItem.appendChild(textItem);
                // add items to list
                list.appendChild(ratingItem);
                list.appendChild(reviewItem);
                // add list to div
                reviewDiv.appendChild(list);
                // add to page
                console.log(reviewDiv);
                formContainer.insertAdjacentElement("beforeend", reviewDiv);
            }
        } catch (err) {
            console.error(err);
            alert(err);
        }
    }
}
var searchReviewUI = new SearchReviewUI();
document.getElementById("search").addEventListener("click", () => {
    searchReviewUI.searchReview();
})
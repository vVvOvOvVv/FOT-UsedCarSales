import ViewReviewsController from "../../controllers/carAgentFunctions/ViewReviewsController.js";

class ViewReviewsUI {
    displayReview() {
        try {
            var controller = new ViewReviewsController();
            var reviews = controller.viewReview();

            if (reviews != null) {
                var content = document.getElementById("content");
                if (content == null)
                    throw "Error with display";

                // create containers
                reviews.forEach(review => {
                    var divEle = document.createElement("div");
                    divEle.className = "container-fluid";
                    divEle.innerHTML = `
                        <ul>
                            <li>Review for car brand: ${review.carBrand}</li>
                            <li>Rating: ${review.rating}</li>
                            <li>Comment(s): ${review.review}</li>
                        </ul>
                    `;
                    content.insertAdjacentElement("beforeend", divEle)
                });
            }
        } catch (err) {
            console.log(err);
            alert(err);
        }
    }
}
var viewUI = new ViewReviewsUI();
document.getElementById("nav").addEventListener("load", (viewUI.displayReview()));
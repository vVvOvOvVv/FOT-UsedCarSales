import ReviewUsedCarAgentController from "../../controllers/buyerFunctions/ReviewUsedCarAgentController.js";
import Boundary from "../UseCaseBoundary.js";

class ReviewUsedCarAgentUI extends Boundary {
    displayPage() {
        document.getElementById("agent-id").value = "";
        document.getElementById("car-brand").value = "";
        document.getElementById("rating").value = 0;
        document.getElementById("comments").value = "";
    }

    onSubmit() {
        try {
            var accountId = document.getElementById("agent-id").value;
            if (accountId == "")
                throw "Please enter the ID of the agent";
            var brand = document.getElementById("car-brand").value;
            if (brand == "")
                throw "Please enter the name of car brand";
            var rating = document.getElementById("rating").dataset.value;
            if (rating == 0)
                throw "Please enter a rating for the agent";
            var review = document.getElementById("comments").value;
            if (review == "")
                throw "Please enter some comments (N/A if not applicable)";

            var controller = new ReviewUsedCarAgentController();
            var successFlag = controller.submitReview(accountId, brand, rating, review);
            if (successFlag)
                this.displaySuccess();
        } catch (err) {
            this.displayError(err);
        }
    }
}
var reviewAgentUI = new ReviewUsedCarAgentUI();
document.getElementById("submit").addEventListener("click", () => {
    reviewAgentUI.onSubmit();
});
// Call displayPage() when the page is loaded
window.onload = reviewAgentUI.displayPage();
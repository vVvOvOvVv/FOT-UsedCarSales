import Review from "../../entities/Review.js";

class ViewReviewsController {
    viewReview() {
        var r = new Review();
        return r.viewR();
    }
}
export default ViewReviewsController;
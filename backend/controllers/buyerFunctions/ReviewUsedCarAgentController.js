import Review from "../../entities/Review.js";

class ReviewUsedCarAgentController {
    submitReview(accountId, brand, rating, review) {
        var r = new Review();
        return r.submitR();
    }
}
export default ReviewUsedCarAgentController;
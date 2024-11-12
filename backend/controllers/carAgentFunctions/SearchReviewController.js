import Review from "../../entities/Review.js"

class SearchReviewController {
    searchReview(brand) {
        var r = new Review();
        return r.searchR(brand);
    }
}
export default SearchReviewController;
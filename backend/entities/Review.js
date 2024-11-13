import Data from "../data/Data.js" 
/* example structure ===================================
static reviews = [
        {"identifiers":
            {"accountId": "c1"},
        "entityInformation":
            {"reviews": [
                {"carBrand": "Toyota",
                "rating": 5,
                "review": "Quick to respond and very friendly!"},
                {"rating": 4.5,
                "review": "Very friendly"
    }]}}];
*/

class Review {
    searchR(brand) {
        var reviews = [];
        try {
            if (Data.reviews == null)
                throw "Data could not be found";
            else {
                if (Data.reviews.length == 0)
                    throw "No reviews found";
                else {
                    for (var i = 0; i < Data.reviews.length; i++) {
                        if (Data.reviews[i].identifiers.accountId == Data.currentUser) {
                            var accountR = Data.reviews[i].entityInformation.reviews;
                            if (accountR.length == 0 | accountR == null)
                                throw "You do not have any reviews yet";
                            else {
                                for (var j = 0; j < accountR.length; j++) {
                                    if (accountR[j].carBrand == brand) 
                                        reviews.push(accountR[j]);
                                }
                                if (reviews.length == 0 | reviews == null)
                                    throw `No reviews found under the brand ${brand}`;
            }}}}}
        } catch (err) {
            throw err; // propagate to boundary
        }
        return reviews;
    }

    submitR(accountId, brand, rating, review) {
        try {
            var successFlag = false;
            if (Data.reviews == null)
                throw "Data could not be found";
            // form data set
            var data = {"carBrand": brand,
                "rating": rating,
                "review": review}
            // first check if agent has any registered reviews
            var alreadyRegistered = false;
            for (var i = 0; i < Data.reviews.length; i++) {
                if (Data.reviews[i].identifiers.accountId == accountId) {
                    alreadyRegistered = true;
                    successFlag = true;
                    Data.reviews[i].entityInformation.reviews.push(data);
                }
            }
            if (!alreadyRegistered) { // create registry
                Data.reviews.push({"identifiers": {"accountId": accountId},
                "entityInformation": {"reviews": [data]}});
                successFlag = true;
            }
        } catch (err) {
            throw err; // propagate to boundary 
        }
        return successFlag;
    }

    viewR() {
        var reviews;
        try {
            if (Data.reviews == null)
                throw "Data could not be found";
            var foundFlag = false;
            for (var i = 0; i < Data.reviews.length; i++) {
                if (Data.currentUser == Data.reviews[i].identifiers.accountId) {
                    reviews = Data.reviews[i].entityInformation.reviews;
                    foundFlag = true;
                    break
                }
            }
            if (!foundFlag)
                throw "You don't have any reviews";
        } catch (err) {
            throw err; // propagate to boundary
        }
        return reviews
    }
}
export default Review;
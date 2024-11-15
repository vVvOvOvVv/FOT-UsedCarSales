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
        var data = JSON.parse(localStorage.getItem("reviews"));
        try {
            if (data == null)
                throw "Data could not be found";
            else {
                if (data.length == 0)
                    throw "No reviews found";
                else {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].identifiers.accountId == localStorage.getItem("currentUser")) {
                            var accountR = data[i].entityInformation.reviews;
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
            var rData = JSON.parse(localStorage.getItem("reviews"));
            var successFlag = false;
            if (rData == null)
                throw "Data could not be found";
            // form data set
            var data = {"carBrand": brand,
                "rating": rating,
                "review": review}
            // first check if agent has any registered reviews
            var alreadyRegistered = false;
            for (var i = 0; i < rData.length; i++) {
                if (rData[i].identifiers.accountId == accountId) {
                    alreadyRegistered = true;
                    successFlag = true;
                    rData[i].entityInformation.reviews.push(data);
                    localStorage.setItem("reviews", JSON.stringify(rData));
                }
            }
            if (!alreadyRegistered) { // create registry
                rData.push({"identifiers": {"accountId": accountId},
                "entityInformation": {"reviews": [data]}});
                localStorage.setItem("reviews", JSON.stringify(rData));
                successFlag = true;
            }
        } catch (err) {
            throw err; // propagate to boundary 
        }
        return successFlag;
    }

    viewR() {
        var reviews;
        var data = JSON.parse(localStorage.getItem("reviews"));
        try {
            if (data == null)
                throw "Data could not be found";
            var foundFlag = false;
            for (var i = 0; i < data.length; i++) {
                if (localStorage.getItem("currentUser") == data[i].identifiers.accountId) {
                    reviews = data[i].entityInformation.reviews;
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
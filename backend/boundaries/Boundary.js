class Boundary { // to be used as a base class for other boundaries 
    // no attributes => no constructor explicitly declared

    displayPage(url) {
        window.open(url, __self); // open specified url in the same tab
    }

    displaySuccess() {
        console.log("Success!");
    }

    displayError() {
        console.log("An Error has occurred, please try again.");
    }
}
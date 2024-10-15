class Boundary { // to be used as a base class for other boundaries 
    // no attributes => no constructor explicitly declared
    // once more use cases have been drawn out, add common functions here
    
    displayPage(url) {
        window.open(url, __self); // open specified url in the same tab
    }

    displaySuccess(successMsgString, successElementId) {
        console.log("Success!");
        var errorMsg = document.getElementById(successElementId);
        errorMsg.value = successMsgString;
    }

    displayError(errorMsgString, errorElementId) {
        console.log("An Error has occurred, please try again.");
        var errorMsg = document.getElementById(errorElementId);
        errorMsg.value = errorMsgString;
    }
}
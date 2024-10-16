class Boundary { // to be used as a base class for other boundaries 
    // no attributes => no constructor explicitly declared
    // once more use cases have been drawn out, add common functions here
    
    /* *
     * displays the page specified in the parameter in the current tab
     * @param url {string} url of the target page to be displayed
     */
    displayPage(url) {
        window.open(url, __self); // open specified url in the same tab
    }

    displaySuccess(successMsgString, successElementId) {
        console.log("Success!");
        var errorMsg = document.getElementById(successElementId);
        errorMsg.innerHTML = successMsgString;
    }

    displayError(errorMsgString, errorElementId) {
        console.log("An Error has occurred, please try again.");
        var errorMsg = document.getElementById(errorElementId);
        errorMsg.innerHTML = errorMsgString;
    }

    /* *
     * take in relevant info from the page and process
     */
    onSubmit() {
        
    }
}

export default Boundary;
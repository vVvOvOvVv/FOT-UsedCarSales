class Boundary { // to be used as a base class for other boundaries 
    // no attributes => no constructor explicitly declared
    // once more use cases have been drawn out, add common functions here
    
    /* *
     * displays the page specified in the parameter in the current tab
     * @param url {string} url of the target page to be displayed
     */
    displayPage(url) {
        window.open(url, "__self"); // open specified url in the same tab
    }

    displaySuccess() {
        alert("Success");
    }

    displayError(err) {
        console.error(err);
        alert(err);
    } 

    // format/field checks 
    isAlphabet(str) {
        return /^[a-z]*$/gi.test(str);
      }
    isNumeric(str) {
        return /^[0-9]*$/.test(str);
    } 
}

export default Boundary;
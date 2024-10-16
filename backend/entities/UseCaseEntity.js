import Data from "../data/Data.js";
class Entity {
    /* * 
     * enforce the following field format/order:
     * entityType : {
     *  identifier : {identifierName: value}
     *  additional information
     * }
     */
    // static dataFile = "../data/Data.json";
 
    isAlphabet(str) {
        return /^[a-z]*$/gi.test(str);
      }
    isNumeric(str) {
        return /^[0-9]*$/.test(str);
    }

    static searchJSON(entityKey, entityValue, identifierKey, identifierValue) {
        
    }

    static writeJSON(data) {
        // console.log(data);
        // const dataJSON = JSON.stringify(data); // stringify data into JSON string

        // write data into JSON
        try {
            Data.dataListJSON.push(data);
        } catch (err) {  
            throw "Unable to write to JSON"; 
        }
        //var obj = JSON.stringify(Data.dataListJSON[Data.dataListJSON.length - 1]);
        console.log("Base entity: " + 
            JSON.stringify(Data.dataListJSON[Data.dataListJSON.length - 1]));
    }
}
export default Entity;
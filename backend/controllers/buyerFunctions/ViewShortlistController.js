import Shortlist from "../../entities/Shortlist.js"

class ViewShortlistController {
    viewShortlist() {
        var l = new Shortlist();
        return l.getShortlist();
    }
}
export default ViewShortlistController;
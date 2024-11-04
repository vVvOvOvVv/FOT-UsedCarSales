import UserAccount from "../../entities/UserAccount.js";

class SearchUserAccountController {
    searchAccount(accountId) {
        var a = new UserAccount();
        return a.searchA(accountId);
    }
}

export default SearchUserAccountController;
class Data {
    // can enter test data here
    static userProfiles = [
        {"identifiers":
            {"profileId": 0},
        "entityInformation" :
            {"role": "buyer",
            "roleDescription": "a user that wishes to buy a used car",
            "status": "active"}
    }];
    static userAccounts = [
        {"identifiers":
            {"accountId": 0},
        "entityInformation":
            {"name": "alex",
            "profileId": 0, // admin
            "email": "alex@gmail.com",
            "password": "a1",
            "status": "active"}
        },
        {"identifiers":
            {"accountId": 1},
        "entityInformation":
            {"name": "bob",
            "profileId": 1, // seller
            "email": "bob@gmail.com",
            "password": "b1",
            "status": "active"
            }
        },
        {"identifiers":
            {"accountId": 2},
        "entityInformation":
            {"name": "cassandra",
            "profileId": 2, // buyer
            "email": "cass@gmail.com",
            "password": "c1",
            "status": "active"
            },
        {"identifiers":
            {"accountId": 3},
        "entityInformation":
            {"name": "daniela",
            "profileId": 3, // agent
            "email": "dani@gmail.com",
            "password": "d1",
            "status": "active"
            }
    }];
    static carListing = [
        {"identifiers":
            {"carId": "0" /*liscence plate, hence a string*/},
        "entityInformation": // keep simple, no need to bloat
            {"brand": "toyota",
            "model": "prius",
            "mileage": 1000, // in km
            "year": 2015,
            "price": 500,
            "carSeller": 1,
            "carAgent": 2,
            "status": "available",
            "views": 1}
    }];
    static shortlists = [
        {"identifiers":
            {"accountId": 2}, // each account will have a shortlist, containing 0+ cars 
        "entityInformation":
            {"cars": [{"carId": 0}]}
    }];
    static reviews = [
        {"identifiers":
            {"accountId": 2},
        "entityInformation":
            {"reviews": [
                {"carBrand": "toyota",
                "rating": 5,
                "review": "Quick to respond and very friendly!"},
                {"rating": 4.5,
                "review": "Very friendly"
    }]}}];
    static currentUser = 2; // account ID of current user
} 
export default Data;
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
            {"name": "Alex",
            "profileId": 0,
            "email": "alex@gmail.com",
            "password": "a1",
            "status": "active"}
        },
        {"identifiers":
            {"accountId": 1},
        "entityInformation":
            {"name": "Bob",
            "profileId": 0,
            "email": "bob@gmail.com",
            "password": "b1",
            "status": "active"
            }
        },
        {"identifiers":
            {"accountId": 2},
        "entityInformation":
            {"name": "Cassandra",
            "profileId": 0,
            "email": "cass@gmail.com",
            "password": "c1",
            "status": "active"
            }
    }];
    static carListing = [
        {"identifiers":
            {"carId": "0" /*liscence plate, hence a string*/},
        "entityInformation": // keep simple, no need to bloat
            {"brand": "Toyota",
            "model": "Prius",
            "mileage": 1000, // in km
            "year manufactured": 2015,
            "price": 500,
            "carSeller": "b1",
            "carAgent": "c1",
            "status": "available",
            "views": 1}
    }];
    static shortlists = [
        {"identifiers":
            {"accountId": 0}, // each account will have a shortlist, containing 0+ cars 
        "entityInformation":
            {"cars": [{"carId": "a1"}]}
    }];
    static reviews = [
        {"identifiers":
            {"accountId": "c1"},
        "entityInformation":
            {"reviews": [
                {"rating": 5,
                "review": "Quick to respond and very friendly!"},
                {"rating": 4.5,
                "review": "Very friendly"
    }]}}];
} 
export default Data;
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
    if (err) {
        throw err;
    } else {
        var dbo = db.db("clothes");

        var query = { attire: "business" };

        dbo.collection("men").find(query).toArray(function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            db.close();
        });
    }
});

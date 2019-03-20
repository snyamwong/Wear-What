const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
    if (err) {
        throw err;
    } else {
        console.log("Database created!");
        db.close();
    }
});

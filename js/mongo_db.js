const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

/*
    Queries MongodDB for a set of clothes
*/
module.exports = {
    queryMongoDB: function(gender, attire, temperature, conditions) {
        MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
            if (err) {
                throw err
            } else {
                var dbo = db.db("clothes")
                var category = ''

                // Temperature Logic
                if (temperature < 45) {
                    category += 'cold'
                }
                else if (temperature < 70) {
                    category += 'mild'
                }
                else {
                    category += 'hot'
                }

                // Wet | Dry logic
                if (conditions.includes('snow') ||
                conditions.includes('rain') ||
                conditions.includes('thunderstorms') ||
                conditions.includes('showers') ||
                conditions.includes('flurries') ||
                conditions.includes('drizzle')) {
                    category += '-wet'
                }
                else {
                    category += '-dry'
                }

                var query = {
                    attire: attire,
                    category: category,
                }

                dbo.collection(gender).find(query).toArray(async function(err, result){
                    console.log(query)
                    console.log(result)

                    return await result
                })

            }
        });
    }
}

const queryMongoDB = (gender, attire, temperature, conditions) =>
    new Promise((resolve, reject) => {
        MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
            if (err) {
                throw err
            } else {
                var dbo = db.db("clothes")
                var category = ''

                // Temperature Logic
                if (temperature < 45) {
                    category += 'cold'
                }
                else if (temperature < 70) {
                    category += 'mild'
                }
                else {
                    category += 'hot'
                }

                // Wet | Dry logic
                if (conditions.includes('snow') ||
                conditions.includes('rain') ||
                conditions.includes('thunderstorms') ||
                conditions.includes('showers') ||
                conditions.includes('flurries') ||
                conditions.includes('drizzle')) {
                    category += '-wet'
                }
                else {
                    category += '-dry'
                }

                var query = {
                    attire: attire,
                    category: category,
                }

                dbo.collection(gender).find(query).toArray(function(err, result){
                    console.log(query)
                    console.log(result)

                    return result
                })

            }
        });
    });

async function doStuff() {
    try {
        const result = await queryMongoDB('men', 'casual', 95, 'clear')
        console.log(result)
    }
    catch (err) {
        console.error('There was an error ', err)
    }
}

// doStuff();
/*
function queryMongoDB(gender, attire, temperature, conditions) {
    MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
        if (err) {
            throw err
        } else {
            var dbo = db.db("clothes")
            var category = ''

            // Temperature Logic
            if (temperature < 45) {
                category += 'cold'
            }
            else if (temperature < 70) {
                category += 'mild'
            }
            else {
                category += 'hot'
            }

            // Wet | Dry logic
            if (conditions.includes('snow') ||
            conditions.includes('rain') ||
            conditions.includes('thunderstorms') ||
            conditions.includes('showers') ||
            conditions.includes('flurries') ||
            conditions.includes('drizzle')) {
                category += '-wet'
            }
            else {
                category += '-dry'
            }

            var query = {
                attire: attire,
                category: category,
            }

            dbo.collection(gender).find(query).toArray(async function(err, result){
                console.log(query)
                console.log(result)

                return await result
            })

        }
    });
}

var result = queryMongoDB('men', 'casual', 95, 'clear')
*/

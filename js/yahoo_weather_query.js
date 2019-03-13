// Require node-oauth package: npm install oauth

var OAuth = require('oauth')
var fs = require('fs')

var header = {
    "Yahoo-App-Id": "dwjs1W32"
}

var request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9eUxGZ1JhN2JMekJ6JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTg5',
    '3bb64e78ade0e82e9e35136f0a3e42313f3c038a',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
)

function getYahooWeatherData() {
    request.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=boston,ma&format=json',
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err)
            } else {
                // Data is JSON String, so first convert it to JSON Object via JSON.parse
                data = JSON.parse(data)

                // temp save data to file
                /*
                data = JSON.stringify(JSON.parse(data), null, 2);
                fs.writeFile('sunday_boston_weather.json', data, function(error) {
                    if (error) {
                        console.log(err);
                    } else {
                        console.log("worked")
                    }
                });
                */
            }
        }
    )
}

/*
    DINAJ means Do I need a Jacket, just a dummy function
*/
function getDINAJ(temperature) {
    if (temperature < 60) {
        console.log("You need a jacket.")
    } else {
        console.log("You don't need a jacket.")
    }
}

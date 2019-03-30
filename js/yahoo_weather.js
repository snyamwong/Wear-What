var OAuth = require('oauth')
var fs = require('fs')

// TODO move this somewhere else...
var header = {
    "X-Yahoo-App-Id": "dwjs1W32"
}

// TODO move this somewhere else...
var request = new OAuth.OAuth(
    null,
    null,
    // consumer key
    'dj0yJmk9eUxGZ1JhN2JMekJ6JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTg5',
    // consumer secret
    '3bb64e78ade0e82e9e35136f0a3e42313f3c038a',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
)

module.exports.request = request

/*
    Returns data of the location user has inputted

    input:
    str - location

    output:
    json - data
*/
module.exports = {
    getYahooWeatherData: function(location) {
        var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=' + location + '&format=json'

        // using a callback to fix the problem of returning a variable too early
        request.get(
        url,
        null,
        null,
        function (err, data, result) {
            if (err) {
                return err
            }
            else {
                console.log('data from yahoo weather api: ' + data)

                return data
            }
        })
    }
}

/*
function delay() {
    return new Promise(function(resolve, reject) {
    // Only `delay` is able to resolve or reject the promise
    setTimeout(function() {
      resolve(yahoo_weather.getYahooWeatherData(req.body.location)) // After 3 seconds, resolve the promise with value 42
    }, 3000)
  })
}

delay()
    .then(function(v){
        console.log(v)
    })
    .catch(function(v){

    })
*/

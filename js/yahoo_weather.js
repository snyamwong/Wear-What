var OAuth = require('oauth')
var fs = require('fs')

// TODO move this somewhere else...
var header = {
    "Yahoo-App-Id": "dwjs1W32"
}

// TODO move this somewhere else...
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

/*
    Returns data of the location user has inputted

    input:
    str - location

    output:
    json - data
*/
export function getYahooWeatherData(location) {
    request.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=' + location + '&format=json',
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err)
            } else {
                // Data is JSON String, so first convert it to JSON Object via JSON.parse
                data = JSON.parse(data)

                return data
            }
        }
    )
}

// Gets data from Yahoo! weather api
const yahoo_weather = require('./yahoo_weather.js')
// Gets a set of clothes from MongoDB
const mongodb = require('./mongo_db.js')

const path = require('path')
const express = require('express')
const body_parser = require('body-parser')
var OAuth = require('oauth')
var fs = require('fs')

const app = express()

const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`)
})

/*
    Setting configuration for express server

    Body parser for receiving data from client
    Static file routing
*/
function config() {
    app.use(body_parser.urlencoded({ extended: true }))
    app.use(body_parser.json())
    app.use('/css', express.static(__dirname + '/../css'))
    app.use('/image', express.static(__dirname + '/../image'))
    app.use('/js', express.static(__dirname + '/../js'))
    app.use('/node_modules', express.static(__dirname + '/../node_modules'))
}

/*
    Sets up endpoints for index.html
*/
function setIndexPage() {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/../index.html'))
    })

    app.post('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/../outfit_pick.html'))
    })
}

/*
    Sets up endpoints for outfit_pick.html
*/
function setPickPage() {
    app.post('/clothes', (req, res) => {
        // Request methods you wish to allow
        // res.setHeader('Access-Control-Allow-Methods', 'GET')
        console.log(req.body)

        // mongodb.queryMongoDB(req.body)

        res.send(req.body)
    })

    app.post('/yahoo_weather', (req, res) => {
        // Request methods you wish to allow
        // res.setHeader('Access-Control-Allow-Methods', 'GET')

        console.log(req.body.location)

        var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=' + req.body.location + '&format=json'

        console.log(url)

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

        // using a callback to fix the problem of returning a variable too early
        request.get(
        url,
        null,
        null,
        function (err, data, result) {
            if (err) {
                res.send(err.body)
            }
            else {
                console.log(data)

                res.send(data)
            }
        })
    })
}

/*
    Sets up endpoints for result.html
*/
function setDisplayPage() {

}

/*
    Sets up the server
*/
function init() {
    config()

    setIndexPage()

    setPickPage()
}

// Start the server
init()

/*
function yahooWeatherAsync(callback, location) {
    setTimeout(function() {
        data = callback(location)

        console.log(data)

        res.send(data)
    }, 2000);
}

yahooWeatherAsync(yahoo_weather.getYahooWeatherData, req.body.location)
*/

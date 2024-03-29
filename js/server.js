const path = require('path')
const express = require('express')
const body_parser = require('body-parser')
var OAuth = require('oauth')
var fs = require('fs')

const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/"

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
        var gender = req.body.gender
        var attire = req.body.attire
        var temperature = req.body.temperature
        var condition = req.body.condition

        const queryMongoDB = (gender, attire, temperature, conditions) =>
            new Promise((resolve, reject) => {
                MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
                    if (err) {
                        throw err
                    } else {
                        var dbo = db.db("clothes")
                        var category = ''

                        // Temperature Logic
                        if (temperature <= 45) {
                            category += 'cold'
                        }
                        else if (temperature > 45 && temperature < 75) {
                            category += 'mild'
                        }
                        else if(temperature >= 75) {
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
                            if (err) {
                                reject(err)
                            }
                            else {
                                resolve(result)
                            }
                        })
                    }
                })
            })

        async function asyncQueryMongoDB() {
            try {
                const result = await queryMongoDB(gender, attire, temperature, condition)

                res.send(result)
            }
            catch (err) {
                console.error('There was an error ', err)
            }
        }

        asyncQueryMongoDB()
    })

    app.post('/yahoo_weather', (req, res) => {
        // Request methods you wish to allow
        // res.setHeader('Access-Control-Allow-Methods', 'GET')
        var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=' +
                    req.body.location +
                    '&format=json'

        var header = {
        }

        // TODO move this somewhere else...
        var request = new OAuth.OAuth(
        )

        const getYahooWeatherData = () =>
            new Promise((resolve, reject) => {
                // using a callback to fix the problem of returning a variable too early
                request.get(
                url,
                null,
                null,
                function (err, data, result) {
                    if (err) {
                        reject(err)
                    }
                    else {
                        resolve(data)
                    }
                })
            })

        async function asyncGetYahooWeatherData() {
            try {
                const data = await getYahooWeatherData()

                res.send(data)
            }
            catch (err) {
                console.error('There was an error ', err)
            }
        }

        asyncGetYahooWeatherData()
    })
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

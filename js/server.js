// Gets data from Yahoo! weather api
const yahoo_weather = require('./yahoo_weather.js')
// Gets a set of clothes from MongoDB
const mongodb = require('./mongo_db.js')

const path = require('path')
const express = require('express')
const body_parser = require('body-parser')

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
    app.use(body_parser.urlencoded({ extended: true }));
    app.use(body_parser.json());
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
        console.log(req.body)

        res.sendFile(path.join(__dirname + '/../outfit_pick.html'))
    });
}

/*
    Sets up endpoints for outfit_pick.html
*/
function setPickPage() {

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
}

// Start the server
init()

const path = require('path')
const express = require('express')
const body_parser = require('body-parser')
const app = express()
const server = app.listen(3000, () => {
    console.log(`Express running → PORT ${server.address().port}`)
})

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use('/css', express.static(__dirname + '/css'))
app.use('/image', express.static(__dirname + '/image'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/node_modules', express.static(__dirname + '/node_modules'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/', (req, res) => {
    console.log(req.body)

    res.sendFile(path.join(__dirname + '/outfit_pick.html'))
});

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.use('/', [
    require('./server/tweets/tweets.routes')
])

module.exports = app

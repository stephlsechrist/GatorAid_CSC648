const express = require('express')
const routes = require('./routes/router')
const bodyParser = require('body-parser')

// Database Connection
const db = require('../config/database')

// Express Server
const port = process.env.PORT || 5000
const app = express()

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// Router
app.use('/api', routes)

app.listen(port, () => console.log(`Server running on port ${port}`))
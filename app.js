'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const api = require('./routes')
const userRoutes = require('./routes/userRoutes')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.use('/user', userRoutes)

app.use('/api', api)

module.exports = app
'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const api = require('./routes')
const userRoutes = require('./routes/userRoutes')
const milestoneRoutes = require('./routes/milestoneRoutes')
const enumeratorRoutes = require('./routes/enumeratorRoutes')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Origin', '*')
  next();
});

app.use('/user', userRoutes);
app.use('/milestone', milestoneRoutes);
app.use('/enum', enumeratorRoutes);
app.use('/api', api);

module.exports = app
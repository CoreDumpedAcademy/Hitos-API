'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const cors = require('cors');

const app = express()
const api = require('./routes')
const userRoutes = require('./routes/userRoutes')
const milestoneRoutes = require('./routes/milestoneRoutes')

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use('/user', userRoutes);
app.use('express.json()');
app.use(cors());
app.use('/', routes);
app.use('/', userRoutes);
app.use('/', index);
app.use('/milestone', milestoneRoutes);
app.use('/api', api);

app.use('/milestone', milestoneRoutes);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/api', api);

app.use(function(req, res, next){
  next(createError(404));
})

module.exports = app;

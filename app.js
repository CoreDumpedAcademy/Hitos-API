'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const cors = require('cors');

const app = express();
const api = require('./routes');
const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('express.json()'); // mirar por que
app.use(cors());
app.use(sassMiddleware({
  src: path.join(_dirname, 'public'),
  dest: path.join(_dirname, 'public'),
  indentedSyntax: true; //si es true es sass si es false es .alert-success
  sourceMap: true
}));

app.use('/', routes);
app.use('/', userRoutes);
app.use('/', index);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/api', api);

app.use(function(req, res, next){
  next(createError(404));
})

module.exports = app;

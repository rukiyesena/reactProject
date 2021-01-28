
var express = require('express');
var app = express();
let bodyParser = require('body-parser');
let morgan = require('morgan');
var cors = require('cors');

 //enableing cors and http headers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//calling router based on url
var materialRouter = require('./router/MaterialRouter');
app.use('/materialManagement', materialRouter);

app.listen(8000);
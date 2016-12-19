var express = require('express');
var router = express.Router();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var unirest = require('unirest');

var baseUrl = "https://api-http.littlebitscloud.cc/",
        username = new Array ('seb.chakraborty@gmail.com'),
        devices = '/devices/',
        deviceid = '00e04c038155',
        token= new Array ('Bearer 87aaa07d4ddce9e5062054ab186e6c2d73018edee1b917014b41e520bf3143e3'),
        myArray = [],
        myNewArray = [];



/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;

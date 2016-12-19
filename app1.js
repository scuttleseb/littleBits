var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var unirest = require('unirest');
var mylogger = require('./node_modules/mylogger')

var baseUrl = "https://api-http.littlebitscloud.cc/",
        username = new Array ('seb.chakraborty@gmail.com'),
        devices = '/devices/',
        deviceid = '00e04c038155',
        token= new Array ('Bearer 87aaa07d4ddce9e5062054ab186e6c2d73018edee1b917014b41e520bf3143e3'),
        myArray = [],
        myNewArray = [];

var routes = require('./routes/index');
var users = require('./routes/users');
var little = require('./routes/little');

var app = express();

module.exports = app;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(mylogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//app.use('/users', users);
//app.use('/axle', little);
// catch 404 and forward to error handler

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next();
  //  res.json('this is about as good as it gets')
  
    });
app.use(function(req, res, next) {
    res.json('this is about as good as it gets')
});

app.use(function(req, res, next){
    unirest.get(baseUrl+devices+deviceid,{'Authorization': token})
           .headers({ 'Accept': 'application/json' })
                 .end(function (response) {
                      myArray = res.body;
                          app.get('/little', function (request, response){
                            var m = (myArray.id+" "+"       "+'\n'+'\n'+myArray.label);
                    //response.send(myArray.id);
                    console.log(m);
                  res.send(m);
                     })
                });
           
            });

    
app.listen(8001);



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

var routes = require('./routes/index');
var users = require('./routes/users');
var little = require('./routes/little');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);
//app.use('/axle', little);
// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//    var err = new Error('Not Found');
  //  err.status = 404;
    //next(err);
//});

// error handlers installed

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function(err, req, res, next) {
   //     res.status(err.status || 500);
      //  res.render('error', {
      //      message: err.message,
        //    error: err
          
      //  });
        //  runMe();
    //});
//}

// production error handler
// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
  //  res.status(err.status || 500);
    //res.render('error', {
     //   message: err.message,
     //   error: {}
    //});
//});



var runMe  = function (i){
    unirest.get(baseUrl+devices+deviceid,{'Authorization': token})
    .headers({ 'Accept': 'application/json' })
            .end(function (response) {
             
           
               console.log(response.headers);
               console.log(response.status);
               console.log(response.body);
                });
            done(myArray);
            }

        


function done(request, response){
    app.get('/', function (request, response){

        response.send(myArray);
    })
}
    
 runMe();
    app.listen(8001);



module.exports = app;

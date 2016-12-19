var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var baseUrl = "https://api-http.littlebitscloud.cc/",
        username = new Array ('seb.chakraborty@gmail.com'),
        devices = '/devices/',
        deviceid = '00e04c038155',
        token= new Array ('Bearer 87aaa07d4ddce9e5062054ab186e6c2d73018edee1b917014b41e520bf3143e3'),

        myArray = [],
        myNewArray = [];

/* GET home page. */
module.exports = router.get('/', function(req, res) {

unirest.get(baseUrl+devices+deviceid,{'Authorization': token})
           .headers({ 'Accept': 'application/json' })
                 .end(function (response) {
                      m = response.body;
                    console.log(m);
               
                res.render('index',{title: JSON.stringify(m)}) ;

                     })
             
                });
             
        
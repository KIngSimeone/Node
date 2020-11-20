var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');

var app = express();


app.use(function(req, res, next){
    console.log('Time: ', Date.now());
    next;
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port);
console.log('Server Listening on port '+port);

module.exports = app;
var path = require('path');
var express = require('express');
var app = express();

var dir = __dirname;

app.use(express.static(dir));

app.listen(8000, function () {
    console.log('Listening on http://localhost:8000/');
});
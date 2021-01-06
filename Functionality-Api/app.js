var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', function (req, res) {
    console.log('ok');
   
    res.send('ok');
});

app.post('/login', function (req, res) {
    var name = req.body.username + ' ' + req.body.password;
    console.log(name);
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(2021, function () {
    console.log('Node server is running..');
});
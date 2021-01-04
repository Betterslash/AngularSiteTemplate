var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');
var gm = require('gm');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'dory7141@gmail.com',
        pass: 'Andreiboss12'
    }
});


var app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static('../'));
app.use(express.static('D:\\MySite\\MySite\\src\\assets'));
app.use(express.static('D:\\MySite\\MySite\\src\\styles.css'));
app.get('/', function(request, response) {
    
    response.sendFile("\\src\\index.html", {root : "."});
});

app.listen(4200);
console.log("Running at Port 3000");
/**
* Module dependencies.
*/
const express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
//const methodOverride = require('method-override');
const session = require('express-session');
const app = express();
const mysql      = require('mysql');
let bodyParser=require("body-parser");
const PDFDocument = require('pdfkit');
const fs = require('fs');
let connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '',
              database : 'test'
            });
 

 
global.db = connection;
 
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

// app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
              secret: 'keyboard cat',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }))
 
// development only

app.get('/', routes.index);//call for main index page
app.get('/signup', user.signup);//call for signup page
app.post('/signup', user.signup);//call for signup post 
app.get('/login', routes.index);//call for login page
app.post('/login', user.login);//call for login post
app.get('/dashboard', user.dashboard);
app.post('/dashboard', user.dashboard);//call for dashboard page after login
app.get('/page',user.page);
app.post('/page',user.page);
app.get('/page3', user.page3);
app.post('/page3', user.page3);
app.get('/page4', user.page4);
app.post('/page4', user.page4);
app.get('/page5', user.page5);
app.post('/page5', user.page5);
app.get('/page6', user.page6);
app.post('/page6', user.page6);
app.get('/page7', user.page7);
app.post('/page7', user.page7);
app.get('/page8', user.page8);
app.post('/page8', user.page8);
app.get('/page9', user.page9);
app.post('/page9', user.page9);
app.get('/page10', user.page10);
app.post('/page10', user.page10);
app.get('/page11', user.page11);
app.post('/page11', user.page11);


app.get('/home/logout', user.logout);//call for logout
app.get('/home/profile',user.profile);//to render users profile

//Middleware
app.listen(8080)
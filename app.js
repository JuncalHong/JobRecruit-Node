var express = require('express');  //express 框架

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session=require('express-session');
var ejs = require('ejs');



var index = require('./routes/index');


var app = express();




//模板引擎

app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// 中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//session setting
app.use(session({
  secret: 'secret',
  name:'recurit',
  cookie:{
    maxAge: 1000*60*30
  },
  resave:true,
  saveUninitialized:true
}));

app.use('/index', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//database setting
app.use(bodyParser.urlencoded({extended:true}));
//app.use(multer());
//app.use(cookieParser());

module.exports = app;
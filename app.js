var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(__dirname + '/client/dist/client'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter); 
app.use('/api', usersRouter);
//este estaba
app.use('/',express.static('client/dist/client',{redirect:false}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// este estaba
app.get('/*', function(req,res) {
    // res.sendFile(__dirname+'client/dist/client/index.html');
    res.sendFile(path.resolve('client/dist/client/index.html'));
  });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page renderiza
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


var createError = require('http-errors');
var express = require('express');
var path = require('path');
// 解析请求头中cookie
var cookieParser = require('cookie-parser');
// 测试
var logger = require('morgan');


// 两个路由工具
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var config = require('./config');
var api = require('./routes/api');



var app = express();

// view engine setup
// 模板引擎的处理 模板存放的目录 引擎ejs引擎
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 制定静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 使用路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// app.use('/api/v1', api);
app.use('/api/' + config.version, api);


// catch 404 and forward to error handler
// 创建404
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;

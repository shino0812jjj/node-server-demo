var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post('/sample_actions', (req, res) => {
  // const params = req.body.input;
  // console.log({ params });
  res.json({ id: 1, name: 'hoge', type: 'actions' });
});

app.post('/sample_webhook', (req, res) => {
  // const body = req.body;
  // console.log({ body });
  // const data = req.body.event.data.new;
  // console.log({ data });
  res.json({ id: 1, name: 'hoge', type: 'event_webhook' });
});

module.exports = app;

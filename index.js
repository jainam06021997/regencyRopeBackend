var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
MySQL = require('./config/dbConfig');

var contactUsAPI = require('./api/contactUsAPI');
var contactUsCtrl = require('./ctrl/contactUsCtrl');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  try {
    const data = await contactUsCtrl.list(req);
    console.log('daa', data);
  } catch (err) {
    console.log('errr', err);
  }
});

app.use('/api', contactUsAPI);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

app.listen(3001, () => {
  console.log('server started');
});

module.exports = app;

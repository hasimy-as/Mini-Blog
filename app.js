import express from 'express';
import path from 'path';
import logger from 'morgan';

import indexRouter from './routes/index';

const PORT = 3000 || process.env.PORT;

let createError = require('http-errors');
let cookieParser = require('cookie-parser');
let app = express();

//engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//default webpage
app.use('/', indexRouter);

//error handlers
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

//connection
app.listen(PORT, () => console.log(`Web is in ${PORT}`));

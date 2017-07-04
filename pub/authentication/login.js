'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = app => {
  app.get('/api/login', (req, res) => {
    res.render('login');
  });
};
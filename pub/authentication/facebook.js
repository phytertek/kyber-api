'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.get('/api/login/facebook', _passport2.default.authenticate('facebook'));
  app.get('/api/login/facebook/response', _passport2.default.authenticate('facebook', {
    failureRedirect: '/api/registration'
  }), (req, res) => {
    res.redirect('/api/user/profile');
  });
}; // npm packages
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connectEnsureLogin = require('connect-ensure-login');

var _connectEnsureLogin2 = _interopRequireDefault(_connectEnsureLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  app.get('/api/user/profile', _connectEnsureLogin2.default.ensureLoggedIn(), (req, res) => {
    res.sendStatus(200);
  });
};
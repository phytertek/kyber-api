'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./passport');

var _registration = require('./registration');

var _registration2 = _interopRequireDefault(_registration);

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _facebook = require('./facebook');

var _facebook2 = _interopRequireDefault(_facebook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = app => {
  (0, _registration2.default)(app);
  (0, _login2.default)(app);
  (0, _facebook2.default)(app);
};
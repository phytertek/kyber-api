'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _authentication = require('./authentication');

var _authentication2 = _interopRequireDefault(_authentication);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _utilities = require('./utilities');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// // my packages
// npm packages
const app = (0, _express2.default)();

// Header security
app.use((0, _helmet2.default)());

// Logger
app.use((0, _morgan2.default)('combined', { stream: _utilities.logger.stream }));

// Cookie Parser
app.use(require('cookie-parser')());

// Body Parser
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

// Session Support
app.use((0, _expressSession2.default)({
  name: 'sessionId',
  secret: _config.authConfig.sessionSecret,
  resave: true,
  saveUninitialized: true
}));

// Passport 
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

// Routes
(0, _user2.default)(app);
(0, _authentication2.default)(app);

// catch all unhandled errors
app.use((req, res) => {
  const message = { error: `Unable to resolve ${req.originalUrl}` };
  _utilities.logger.error(message);
  res.status(404).send(message);
});

exports.default = app;
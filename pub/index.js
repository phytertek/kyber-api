'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _db = require('./db');

var _utilities = require('./utilities');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// connect to db
// my packages
(0, _db.connect)(() => {
  _utilities.logger.info(`Database ready, starting ${_config.appConfig.name}...`);
  // start app
  _app2.default.listen(_config.appConfig.port, () => {
    _utilities.logger.info(`${_config.appConfig.name} listening at ${_config.appConfig.host}`);
  });
});

// output all uncaught exceptions
process.on('uncaughtException', err => _utilities.logger.error('Uncaught exception', err));
process.on('unhandledRejection', err => _utilities.logger.error('Unhandled rejection', err));
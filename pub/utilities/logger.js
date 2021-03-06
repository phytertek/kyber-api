'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = undefined;

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = exports.logger = new _winston2.default.Logger({
  transports: [new _winston2.default.transports.Console({
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
    colorize: true,
    timestamp: true,
    prettyPrint: true,
    label: 'Kyber-API'
  })]
}); // npm packages


logger.stream = {
  write: message => logger.info(message)
};
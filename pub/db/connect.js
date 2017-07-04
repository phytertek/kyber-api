'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// npm packages
const connect = exports.connect = next => _mongoose2.default.connect(_config.dbConfig.target, _config.dbConfig.options, next);

// my packages
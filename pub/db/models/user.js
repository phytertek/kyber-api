'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UserSchema = new _mongoose.Schema({
  _fbid: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  email: String
});

const User = exports.User = _mongoose2.default.model('User', UserSchema);
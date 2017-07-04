"use strict";

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportFacebook = require("passport-facebook");

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete fbConfig profile is serialized
// and deserialized.
_passport2.default.serializeUser(function (user, cb) {
  cb(null, user);
});

// my packages


_passport2.default.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Configure the fbConfig strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the fbConfig API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
_passport2.default.use(new _passportFacebook.Strategy(_config.fbConfig, (accessToken, refreshToken, profile, cb) => {
  // In this example, the user's Facebook profile is supplied as the user
  // record.  In a production-quality application, the Facebook profile should
  // be associated with a user record in the application's database, which
  // allows for account linking and authentication with other identity
  // providers.
  return cb(null, profile);
}));
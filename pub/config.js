'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const app = {
  name: process.env.APP_NAME,
  host: process.env.HOST,
  port: process.env.PORT,
};

const appConfig = exports.appConfig = _extends({}, app, {
  hostname: process.env.HOST || `${app.host}:${app.port}`
});

const fbConfig = exports.fbConfig = {
  clientID: process.env.FB_CID,
  clientSecret: process.env.FB_CS,
  callbackURL: process.env.FB_CBURL,
  enableProof: true
};

const authConfig = exports.authConfig = {
  sessionSecret: process.env.SES_SEC
};

const db = {
  name: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS
};

const dbConfig = exports.dbConfig = {
  target: `mongodb://${db.user}:${db.pass}@${db.host}:${db.port}/${db.name}`,
  options: {
    useMongoClient: true
  }
};
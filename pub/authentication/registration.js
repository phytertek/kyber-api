'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utilities = require('../utilities');

var _db = require('../db');

exports.default = app => {
  app.get('/api/registration', (req, res) => {
    const user = req.user ? req.user : false;
    if (user) {
      // Query db for existing user profile
      _db.User.findOne({ "_fbid": user.id }, '_id _fbid', (err, usr) => {
        if (usr) {
          // If it exists send authed reply
          res.status(200).send({ isAuth: true, user: usr });
        } else {
          // If not, send new user reply
          res.status(200).send({ isAuth: false, user: 'new' });
          // const newUser = new User({
          //   _fbid: user.id
          // })
          // newUser.save()
        }
      });
    } else {
      res.status(200).send({ isAuth: false, fbAuth: false });
    }
  });
};
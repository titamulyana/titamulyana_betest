'use strict';
var user = require('../models/user');


class userController {
  static async createUser(req, res, next) {
    try {
      const userData = new user(req.body);
      userData.save();
      console.log(userData, "<<<<<<== test");
      res.status(201).send(userData);
    } catch (error) {
      console.log(error);
    }
  }

  static async getUser(req, res, next) {
    try {
      let { identityNumber, accountNumber } = req.query;
      user.findOne({identityNumber: identityNumber, accountNumber: accountNumber}, 
        function (error, user) {

        if (error) {
          res.status(417).send(error);
          return;
        }

        res.status(200).send(user);
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async getAllUser(req, res, next) {
    try {
      const userData = user;
      user.find(function (error, user) {

        if (error) {
          res.status(417).send(error);
          return;
        }

        res.status(200).send(user);
      });
      res.status(201).send(userData);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = userController;
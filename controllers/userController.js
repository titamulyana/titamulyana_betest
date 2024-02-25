'use strict';
const redisClient = require('../database/redisConfig');
var user = require('../models/user');


class userController {
  static async createUser(req, res, next) {
    try {
      const userData = new user(req.body);
      userData.save();
      res.status(201).send({message: "Created User Success"});
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
        
        let key = 'express' + req.originalUrl || req.url
        redisClient.set(key, JSON.stringify(user))
        redisClient.expire(key, req.duration)
        res.status(200).send(user);
      });

    } catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      user.findOne({_id: id}, function (error, userData) {
        if (error) {
          response.status(500).send(error);
          return;
        }

        if(userData) {
          user.findOneAndDelete({_id: id}, function (error) {
            if (error) {
              response.status(500).send(error);
              return;
            }

            res.status(200).json({
              'message': 'user with id ' + id + ' was removed.'
            });
          })
        } else {
          res.status(404).json({
            message: 'user with id ' + id + ' was not found.'
          });
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;

      user.findOne({_id: id}, function (error, userData) {
        if (error) {
          response.status(500).send(error);
          return;
        }

        if(userData) {
          user.findByIdAndUpdate({_id: id}, {...req.body}, function (error) {
            if (error) {
              response.status(500).send(error);
              return;
            }

            res.status(200).json({
              'message': 'user with id ' + id + ' was update.'
            });
          })
        } else {
          res.status(404).json({
            message: 'user with id ' + id + ' was not found.'
          });
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = userController;
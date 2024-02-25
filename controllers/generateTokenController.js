'use strict';
const { token } = require('../helpers');
var auth = require('../models/auth');

class generateTokenController {
  static async createToken(req, res, next) {
    try {
      let { userName, password } = req.body;
      auth.findOne({userName: userName}, 
        async function (error, auth) {
        
        if (error) {
          res.status(417).send(error);
          return;
        }
        let tokenGenerated = await token(auth.userName);

        res.status(200).send({token: tokenGenerated});
      });
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = generateTokenController;
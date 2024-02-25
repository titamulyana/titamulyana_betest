const jwt = require("jsonwebtoken");
const redisClient = require("../database/redisConfig")

const token = async (username) => {
  return jwt.sign(
    { username: username },
    "BTPN-TEST"
  );
}

function cache(duration) {
  return async (req, res, next) => {
    let key = 'express' + req.originalUrl || req.url
    const value = await redisClient.get(key);
    if(value) {
      res.send(JSON.parse(value))
      return;
    }
    req.duration = duration;
    next()
  }
}


module.exports = {token, cache};

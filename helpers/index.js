const jwt = require("jsonwebtoken");

const token = async (username) => {
  return jwt.sign(
    { username: username },
    "BTPN-TEST"
  );
}


module.exports = {token};

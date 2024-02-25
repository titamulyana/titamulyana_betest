const jwt = require("jsonwebtoken");
const auth = require("../models/auth");

const atuhn = async (req, res, next) => {
  const authheader = req.headers.authorization;

  if (!authheader || !authheader.startsWith("Bearer")) {
    return res.status(401).send({ error: "Missing the authorization header" });
  }

  const token = authheader.split(" ")[1];
  try {
    const payload = jwt.verify(token, "BTPN-TEST") 
    const authData = auth.findById(payload.userName)
    
    if (!authData) {
      return res.status(404).send({ error: "User not found" });
    }
    next()
  } catch (error) {
    console.log(error);
    return res.status(401).send({ error: "Invalid token" });
  }
};

module.exports = atuhn;
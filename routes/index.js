const express = require("express");
const router = express.Router();
const user = require("./userRoutes");
const auth = require("./authRoutes");

router.use("/generate-token", auth);
router.use("/user", user);

module.exports = router;
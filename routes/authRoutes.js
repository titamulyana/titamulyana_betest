'use strict';
const express = require('express');
const generateTokenController = require('../controllers/generateTokenController');
const router = express.Router();

router.post('/', generateTokenController.createToken);

module.exports = router;

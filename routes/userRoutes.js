'use strict';
const express = require('express');
const userControllers = require('../controllers/userController.js');
const router = express.Router();
const authn = require('../middleware/authentication');

router.use(authn);
router.get('/', userControllers.getAllUser);
router.get('/find-one', userControllers.getUser);
router.post('/create-user', userControllers.createUser);

module.exports = router;

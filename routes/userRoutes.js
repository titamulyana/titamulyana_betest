'use strict';
const express = require('express');
const userControllers = require('../controllers/userController.js');
const router = express.Router();
const authn = require('../middleware/authentication');
// const cache = require('../database/cache.js');

const { cache } = require('../helpers/index.js');

router.use(authn);
router.get('/', cache(120),userControllers.getAllUser);
router.delete('/:id', userControllers.delete)
router.put('/:id', userControllers.update)
router.get('/find-one', userControllers.getUser);
router.post('/create-user', userControllers.createUser);

module.exports = router;

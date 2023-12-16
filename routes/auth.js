const express = require('express');
const router = express.Router();  // Use express.Router() to create a router
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const controllersAuth = require('../controllers/auth');
const bcrypt = require('bcrypt');


router.post('/register', wrapAsync(controllersAuth.register));
router.post('/login', controllersAuth.login);
router.post('/logout', controllersAuth.logout);

module.exports = router;

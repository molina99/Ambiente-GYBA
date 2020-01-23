const express = require('express');
const router = express.Router();

import { createUser } from '../controllers/user.controller';

router.post('/createUser', createUser);

router.get('/users/signin', (req, res) => {
    res.render('users/signIn');
});

router.get('/users/signup', (req, res) => {
    res.render('users/signUp');
});

module.exports = router;
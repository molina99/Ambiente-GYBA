const express = require('express');
const router = express.Router();

import { createUser, getUser, getUserId, deleteUser, updateUser, getUserByRol } from '../controllers/user.controller';

router.post('/createUser', createUser);
router.get('/getUser', getUser);
router.get('/getUser/:id', getUserId);
router.delete('/deleteUser/:id', deleteUser);
router.put('/updateUser/:id', updateUser);

router.get('/getRol/:id_rol', getUserByRol);



router.get('/users/signin', (req, res) => {
    res.render('users/signIn');
});

router.get('/users/signup', (req, res) => {
    res.render('users/signUp');
});

module.exports = router;
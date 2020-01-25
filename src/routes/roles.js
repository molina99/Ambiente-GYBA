const express = require('express');
const router = express.Router();

import { createRol, getRol, getRolId, deleteRol, updateRol } from '../controllers/rol.controller';

// METHODS CRUD
router.post('/createRol', createRol);
router.get('/getRol', getRol);
router.get('/getRol/:id', getRolId);
router.delete('/deleteRol/:id', deleteRol);
router.put('/updateRol/:id', updateRol);

// VIEWS

module.exports = router;
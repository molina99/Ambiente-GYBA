const express = require('express');
const router = express.Router();

import { createRol, getRol, getRolId, deleteRol, updateRol } from '../controllers/rol.controller';

router.post('/createRol', createRol);
router.get('/getRol', getRol);
router.get('/getRol/:id', getRolId);
router.delete('/deleteRol/:id', deleteRol);
router.put('/updateRol/:id', updateRol);

module.exports = router;
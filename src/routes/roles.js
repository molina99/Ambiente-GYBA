const express = require('express');
const router = express.Router();

import { createRol } from '../controllers/rol.controller';

router.post('/createRol', createRol);

module.exports = router;
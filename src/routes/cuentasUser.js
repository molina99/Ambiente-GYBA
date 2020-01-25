const express = require("express");
const router = express.Router();

import {
  getCuentaUser,
  getCuentaUserId,
  createCuentaUser,
  deleteCuentaUser,
  updateCuentaUser,
  getCuentaUserByUser
} from "../controllers/cuentaUser.controller";

// METHODS CRUD
router.post("/createCuentaUser", createCuentaUser);
router.get("/getCuentaUser", getCuentaUser);
router.get("/getCuentaUser/:id", getCuentaUserId);
router.delete("/deleteCuentaUser/:id", deleteCuentaUser);
router.put("/updateCuentaUser/:id", updateCuentaUser);
router.get("/getCuentasUser/:id_persona", getCuentaUserByUser);

// VIEWS


module.exports = router;

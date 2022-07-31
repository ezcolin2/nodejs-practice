"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");
const router = express.Router();
router.get("/",ctrl.hello);

router.get("/login",ctrl.login);
module.exports = router;
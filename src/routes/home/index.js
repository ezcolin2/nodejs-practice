"use strict";

const express = require("express");
const ctrl = require("./home.ctrl");
const router = express.Router();
router.get("/",ctrl.output.hello);

router.get("/login",ctrl.output.login);
router.post("/login",ctrl.process.login);
router.get("/register",ctrl.output.register);
module.exports = router;
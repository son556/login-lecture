"use strict!";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.crtl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);
router.get("/test", ctrl.output.test);

module.exports = router;
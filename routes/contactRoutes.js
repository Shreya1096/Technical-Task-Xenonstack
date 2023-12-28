const express = require("express");
const { submitContactForm } = require("../controller/contactController.js");

const router = express.Router();

router.post("/contact", submitContactForm);

module.exports = router;

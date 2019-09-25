const express = require('express');
const CatchController = express.Router();
const { submitCatch } = require('../controllers/catchHandlers.js');

CatchController.route('/')
  .post(submitCatch)

module.exports = CatchController;
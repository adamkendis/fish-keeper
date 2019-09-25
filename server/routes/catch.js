const express = require('express');
const CatchController = express.Router();
const { getRecentCatches, submitCatch } = require('../controllers/catchHandlers.js');

CatchController.route('/')
  .get(getRecentCatches)
  .post(submitCatch)

module.exports = CatchController;
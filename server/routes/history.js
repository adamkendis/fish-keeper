const express = require('express');
const HistoryController = express.Router();
const { getAllFish, 
        getFishById, 
        updateFishById, 
        deleteFishById } = require('../controllers/historyHandlers.js');

HistoryController.route('/')
  .get(getAllFish)

HistoryController.route('/:id')
  .get(getFishById)
  .put(updateFishById)
  .delete(deleteFishById)

module.exports = HistoryController;
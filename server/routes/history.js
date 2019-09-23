const express = require('express');
const HistoryController = express.Router();
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[environment];
const db = require('knex')(config);

HistoryController.route('/history')
  .get(function(req, res, next){
    db('fish_catch_data')
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
    })
  })
  .post(function(req, res, next){
    //
  })
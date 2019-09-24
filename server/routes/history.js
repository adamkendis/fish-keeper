const express = require('express');
const HistoryController = express.Router();
const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];
const db = require('knex')(config);

HistoryController.route('/?')
  .get(function(req, res, next){
    db('fish_catch_data')
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.error(err);
        res.status(500).end();
      })
  })
  .post(function(req, res, next){
    db('fish_catch_data')
      .insert(req.data)
      .then(() => {
        res.status(200).send({message: 'Fish saved to database.'});
      })
      .catch(err => {
        console.error(err);
        res.status(500).end();
      })
  })

module.exports = HistoryController;
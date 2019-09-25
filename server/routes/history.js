const express = require('express');
const HistoryController = express.Router();
const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];
const db = require('knex')(config);

HistoryController.route('/')
  .get(function(req, res){
    db('fish_catch_data')
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.error(err);
        res.status(500).end();
      })
  })

HistoryController.route('/:id')
  .get(function(req, res){
    let id = req.params.id
    db('fish_catch_data')
      .where({ id })
      .then((data) => {
        res.send(data);
      })
      .catch(err => {
        console.error(err)
        res.status(500).end();
      })
  })
  .put(function(req, res){
    let id = req.params.id;
    db('fish_catch_data')
      .where({ id })
      .update(req.body.fishData)
      .then(() => {
        res.send('Updated');
      })
      .catch(err => {
        console.error(err);
        res.status(500).end();
      })
  })
  .delete(function(req, res){
    let id = req.params.id;
    db('fish_catch_data')
      .where({ id })
      .del()
      .then(() => {
        res.send('Deleted')
      })
      .catch(err => {
        console.error(err);
        res.status(500).end();
      })
  })

module.exports = HistoryController;
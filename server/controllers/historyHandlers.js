const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];
const db = require('knex')(config);

const historyControllers = {

  getAllFish: function(req, res) {
    db('fish_catch_data')
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.error(err);
        res.status(500).end();
      })
  },

  getFishById: function(req, res){
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
  },

  updateFishById: function(req, res){
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
  },

  deleteFishById: function(req, res){
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
  }

}

module.exports = historyControllers;
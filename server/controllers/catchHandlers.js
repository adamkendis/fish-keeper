const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];
const db = require('knex')(config);

module.exports = {
  
  getRecentCatches: function(req, res) {
    db('fish_catch_data')
      .orderBy('timestamp', 'desc')
      .limit(10)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        console.error(err)
      })
  },

  submitCatch: function(req, res) {
    db('fish_catch_data')
      .insert(req.body.fish)
      .then(() => {
        res.end();
      })
      .catch(err => {
        console.error(err);
      })
  }

}
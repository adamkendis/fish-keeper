const Fish = require('../models/fish.js');

module.exports = {
  
  getRecentCatches: function(req, res) {
    Fish.getLastTen()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        console.error(err)
      })
  },

  submitCatch: function(req, res) {
    const fish = req.body;
    Fish.createOne(fish)
      .then((data) => {
        res.send('Finished');
      })
      .catch(err => {
        console.error(err);
      })
  }

}
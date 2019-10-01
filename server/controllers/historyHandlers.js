const Fish = require('../models/fish.js');

module.exports = {

  getAllFish: function(req, res) {
    Fish.getAll()
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
    Fish.getOne(id)
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
    let data = req.body;
    Fish.updateOne(id, data)
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
    Fish.deleteOne(id)
      .then(() => {
        res.send('Deleted')
      })
      .catch(err => {
        console.error(err);
        res.status(500).end();
      })
  }

}
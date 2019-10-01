const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];
const db = require('knex')(config);

const Fish = {
  
  getAll() {
    return db('fish_catch_data');
  },

  getOne(id) {
    return db('fish_catch_data')
      .where({ id })
  },

  getLastTen() {
    return db('fish_catch_data')
      .orderBy('timestamp', 'desc')
      .limit(10)
  },

  createOne(fish) {
    return db('fish_catch_data')
     .insert(fish);
  },

  deleteOne(id) {
    return db('fish_catch_data')
      .where({ id })
      .del()
  },

  updateOne(id, newData) {
    return db('fish_catch_data')
      .where({ id })
      .update(newData)
  }
}

module.exports = Fish;
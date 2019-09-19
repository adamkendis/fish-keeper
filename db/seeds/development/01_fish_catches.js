const faker = require('faker');

const createRecord = knex => {
  return knex('fish_catch_data').insert([
    {
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
      fish_species: faker.lorem.words(2),
      fish_length: faker.random.number(20),
      lure_type: faker.random.words(3),
      hook_size: faker.random.number(22),
      timestamp: faker.random.number(1568832048734)
    }
  ]);
}

exports.seed = function(knex) {
  return knex('fish_catch_data').del()
    .then(function () {
      let rows = [];

      for (let i = 0; i < 15; i++) {
        rows.push(createRecord(knex))
      }

      return Promise.all(rows);
    });
};

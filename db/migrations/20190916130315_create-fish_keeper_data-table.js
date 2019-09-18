
exports.up = function(knex) {
  return knex.schema.createTable('fish_catch_data', function(table) {
    table.increments('id').primary(),
    table.decimal('latitude', 9, 6);
    table.decimal('longitude', 9, 6);
    table.text('fish_species');
    table.decimal('fish_length', 4, 2);
    table.text('lure_type');
    table.integer('hook_size');
    table.integer('timestamp');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('fish_catch_data');
};

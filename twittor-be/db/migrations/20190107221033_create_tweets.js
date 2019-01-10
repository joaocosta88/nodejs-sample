const tableName = 'tweets';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('tableName', function(table) {
    table.increments('id');
    table.string('tweet');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tableName');
};

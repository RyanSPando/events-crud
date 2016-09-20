
exports.up = function(knex, Promise) {
  return knex.schema.table('events', table => {
    table.integer('venue_id').notNullable();
    table.foreign().references('id').inTable('venues');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('events', table => {
    table.dropColumn('venue_id');
  });
};

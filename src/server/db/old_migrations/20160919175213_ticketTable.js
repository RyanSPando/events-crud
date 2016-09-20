const knex = require('knex');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', (table) => {
    table.increments();
    table.string('name').notNullable().defaultsTo('');
    table.decimal('price', 14, 2).notNullable().defaultsTo(1.00);
    table.integer('event_id').notNullable();
    table.foreign('event_id').references('id').inTable('events');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets');
};

const knex = require('knex');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.string('title').notNullable().defaultsTo('');
    table.text('description').notNullable().defaultsTo('');
    table.boolean('over_21').notNullable().defaultsTo('false');
    table.date('start_datetime').notNullable().defaultsTo(knex.fn.now());
    table.date('end_datetime').notNullable().defaultsTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};

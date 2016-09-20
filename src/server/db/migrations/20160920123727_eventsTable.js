exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', (table) => {
    table.increments();
    table.string('title').notNullable().defaultsTo('');
    table.text('description').notNullable().defaultsTo('');
    table.boolean('over_21').notNullable().defaultsTo('false');
    table.date('start_datetime').notNullable().defaultsTo(knex.fn.now());
    table.date('end_datetime').notNullable().defaultsTo(knex.fn.now());
    table.integer('venue_id').notNullable();
    table.foreign('venue_id').references('id').inTable('venues');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};

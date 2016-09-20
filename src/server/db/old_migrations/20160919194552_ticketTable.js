
exports.up = function(knex, Promise) {
  return knex.schema.createTable('venues', (table) => {
    table.increments();
    table.string('name').notNullable().defaultsTo('');
    table.integer('capacity').notNullable().defaultsTo(0);
    table.string('line_1').notNullable().defaultsTo('');
    table.string('line_2').notNullable().defaultsTo('');
    table.string('city').notNullable().defaultsTo('');
    table.string('state').notNullable().defaultsTo('');
    table.integer('zip').notNullable().defaultsTo(80000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('venues');
};

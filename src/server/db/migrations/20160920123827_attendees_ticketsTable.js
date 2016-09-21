
exports.up = function(knex, Promise) {
  return knex.schema.createTable('attendees_tickets', (table) => {
    table.integer('attendee_id').notNullable();
    table.foreign('attendee_id').references('id').inTable('attendees').onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('ticket_id').notNullable();
    table.foreign('ticket_id').references('id').inTable('tickets').onDelete('CASCADE').onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('attendees_tickets');
};

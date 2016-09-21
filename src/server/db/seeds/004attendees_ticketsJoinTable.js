var faker = require('faker');

exports.seed = (knex, Promise) => {
  return knex.raw('truncate table attendees_tickets CASCADE').then(() => {

    return knex('venues').then(venues => {
      return knex('tickets').orderBy('id').then(tickets => {
        return knex('attendees').then(attendees => {
          const sortedAttendees = attendees.sort((a,b) => {
            return a.id - b.id;
          });
          const promises = [];
          sortedAttendees.forEach((attendee, index) => {
            let promise = knex('attendees_tickets').insert({
              attendee_id: attendee.id,
              ticket_id: tickets[index % 20].id
            });
            promises.push(promise);
          });
          return Promise.all(promises);

        });
      });
    });
  });
};

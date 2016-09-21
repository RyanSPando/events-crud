var faker = require('faker');

exports.seed = (knex, Promise) => {
  return knex.raw('truncate table attendees CASCADE').then(() => {
    return knex('venues').then(venues=> {
      return knex('attendees').then(attendee => {
        let promises = [];

        let totalSeats = 0;
        venues.forEach((venue) => {
          totalSeats += venue.capacity;
        });
        for (let i = 0; i < totalSeats - 4; i++) {
          let promise = knex('attendees').insert({
            preferred_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            birthday: faker.date.between('1940-01-01', '2006-12-31'),
            email: faker.internet.email()
          });
          promises.push(promise);
        }
        return Promise.all(promises);
      });
    });
  });
};

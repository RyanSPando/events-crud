var faker = require('faker');

exports.seed = (knex, Promise) => {
  return knex('attendees').then(attendee => {
    let promises = [];

    for (let i = 0; i < 100; i++) {
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
};

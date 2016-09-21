var faker = require('faker');

exports.seed = (knex, Promise) => {
  return knex.raw('truncate table events CASCADE').then(() => {
    return knex('venues').max('id').then(venues => {
      const maxVenues = venues[0].max;
      const minVenues = maxVenues - 2;
      return knex('events').then(events => {
        const promises = [];
        for (let i = 0; i < 4; i++) {

          let promise = knex('events').insert({
            title: faker.random.word(),
            description: faker.lorem.sentences(),
            over_21: faker.random.boolean(),
            start_datetime: faker.date.future(),
            end_datetime: faker.date.future(),
            venue_id: faker.random.number({min: minVenues, max: maxVenues})
          });
          promises.push(promise);
        }
        return Promise.all(promises);
      });
    });
  });
};

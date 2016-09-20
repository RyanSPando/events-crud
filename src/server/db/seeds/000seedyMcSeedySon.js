var faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('truncate table venues CASCADE')
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('venues').insert({
          name: faker.company.companyName(),
          capacity: faker.random.number({min:5, max: 2000}),
          line_1: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          zip: parseInt(faker.address.zipCode().slice(0,5))
        }),
        knex('venues').insert({
          name: faker.company.companyName(),
          capacity: faker.random.number({min:5, max: 2000}),
          line_1: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          zip: parseInt(faker.address.zipCode().slice(0,5))
        }),
        knex('venues').insert({
          name: faker.company.companyName(),
          capacity: faker.random.number({min:5, max: 2000}),
          line_1: faker.address.streetAddress(),
          city: faker.address.city(),
          state: faker.address.state(),
          zip: parseInt(faker.address.zipCode().slice(0,5))
        }),
      ]);
    });
};

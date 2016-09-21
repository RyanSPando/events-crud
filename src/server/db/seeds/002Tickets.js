var faker = require('faker');
const ticketTypes = ['Regular', 'Discount', 'VIP', 'Back-Stage', 'Over-Flow'];
const cost = [20.00, 15.00, 50.00, 100.00, 10.00];

exports.seed = (knex, Promise) => {
  return knex('events').then(events => {
    return knex('tickets').then(tickets => {
      const promises = [];
      events.forEach((evenT) => {
          ticketTypes.forEach((type) => {
            const index = faker.random.number({min:0, max: (ticketTypes.length - 1)});
            let promise = knex('tickets').insert({
              name: ticketTypes[index],
              price: cost[index],
              event_id: evenT.id
            });
            promises.push(promise);
          });
        });
      return Promise.all(promises);
    });
  });
};

const faker = require('faker');

module.exports = (amount) => {
  const result = [];
  for (let i = 0; i < amount; i += 1) {
    result.push({
      title: faker.lorem.words(3),
    });
  }
  return result;
};

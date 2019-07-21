const faker = require('faker');
const { taskTypes } = require('../../src/lib/constants');

module.exports = (amount) => {
  const result = [];
  for (let i = 0; i < amount; i += 1) {
    result.push({
      title: faker.lorem.words(3),
      content: faker.lorem.paragraph(5),
      type: faker.random.arrayElement(taskTypes),
    });
  }
  return result;
};

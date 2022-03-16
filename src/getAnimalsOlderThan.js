const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .some((specie) => specie.name === animal && specie.residents
      .every((animals) => animals.age >= age));
}

module.exports = getAnimalsOlderThan;

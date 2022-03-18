const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const fistSpecieId = data.employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const findSpecie = data.species
    .find((specie) => specie.id === fistSpecieId);
  const oldestAnimal = findSpecie.residents
    .reduce((acc, object) => (acc.age < object.age ? object : acc));
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;

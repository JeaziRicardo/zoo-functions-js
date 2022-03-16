const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce(((acc, specie) => {
      acc[`${specie.name}`] = specie.residents.length;
      return acc;
    }), {});
  }
  if (!animal.sex) {
    return data.species
      .find((specie) => specie.name === animal.specie)
      .residents.length;
  }
  return data.species
    .find((specie) => specie.name === animal.specie)
    .residents.filter((animalResid) => animalResid.sex === animal.sex).length;
}

module.exports = countAnimals;

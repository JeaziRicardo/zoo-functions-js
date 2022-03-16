const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const obj = data.species.filter((animal) => ids.find((id) => id === animal.id));
  return obj;
}

module.exports = getSpeciesByIds;

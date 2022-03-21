const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function speciesByLocation() {
  return data.species
    .reduce((acc, specie) => {
      acc[specie.location] = species
        .filter((animals) => animals.location === specie.location)
        .map((animal) => animal.name);
      return acc;
    }, {});
}

function animalsName() {
  return data.species.reduce((acc, specie) => {
    acc[specie.location] = species
      .filter((animals) => animals.location === specie.location)
      .reduce((acc2, specie2) => {
        acc2.push({
          [specie2.name]: species
            .filter((animals2) => animals2.location === specie.location)
            .filter((anim) => anim.name === specie2.name)
            .find((animal2) => animal2.residents).residents
            .map((animal3) => animal3.name),
        });
        return acc2;
      }, []);
    return acc;
  }, {});
}

function sortAnimalsName() {
  return data.species.reduce((acc, specie) => {
    acc[specie.location] = species
      .filter((animals) => animals.location === specie.location)
      .reduce((acc2, specie2) => {
        acc2.push({
          [specie2.name]: species
            .filter((animals2) => animals2.location === specie.location)
            .filter((anim) => anim.name === specie2.name)
            .find((animal2) => animal2.residents).residents
            .map((animal3) => animal3.name)
            .sort(),
        });
        return acc2;
      }, []);
    return acc;
  }, {});
}

function animalsByGender(options) {
  return data.species.reduce((acc, specie) => {
    acc[specie.location] = species
      .filter((animals) => animals.location === specie.location)
      .reduce((acc2, specie2) => {
        acc2.push({
          [specie2.name]: species
            .filter((animals2) => animals2.location === specie.location)
            .filter((anim) => anim.name === specie2.name)
            .find((animal2) => animal2.residents).residents
            .filter((animal3) => animal3.sex === options.sex)
            .map((animal4) => animal4.name),
        });
        return acc2;
      }, []);
    return acc;
  }, {});
}

function sortanimalsByGender(options) {
  return data.species.reduce((acc, specie) => {
    acc[specie.location] = species
      .filter((animals) => animals.location === specie.location)
      .reduce((acc2, specie2) => {
        acc2.push({
          [specie2.name]: species
            .filter((animals2) => animals2.location === specie.location)
            .filter((anim) => anim.name === specie2.name)
            .find((animal2) => animal2.residents).residents
            .filter((animal3) => animal3.sex === options.sex)
            .map((animal4) => animal4.name)
            .sort(),
        });
        return acc2;
      }, []);
    return acc;
  }, {});
}
// As funções a seguir foram elaboradas para diminnuir a complexidade que foi gerada na função 'getAnimalMap'.
function genderAndSorted(options) {
  if (options.sex && options.sorted) {
    return sortanimalsByGender(options);
  }
}

function justGender(options) {
  if (options.sex && !options.sorted) {
    return animalsByGender(options);
  }
  return genderAndSorted(options);
}

function nameAndSorted(options) {
  if (options.includeNames && options.sorted && !options.sex) {
    return sortAnimalsName();
  }
  return justGender(options);
}

function justName(options) {
  if (options.includeNames && !options.sorted && !options.sex) {
    return animalsName();
  }
  return nameAndSorted(options);
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return speciesByLocation();
  }
  return justName(options);
}

console.log(speciesByLocation());
module.exports = getAnimalMap;

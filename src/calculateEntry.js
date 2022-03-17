const data = require('../data/zoo_data');

const { adult, child, senior } = data.prices;

function countEntrants(entrants) {
  return entrants.reduce((acc, entrant) => {
    if (entrant.age < 18) {
      acc.child += 1;
      return acc;
    }
    if (entrant.age >= 50) {
      acc.senior += 1;
      return acc;
    }
    acc.adult += 1;
    return acc;
  }, { adult: 0, child: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const objEntrants = countEntrants(entrants);
  return (objEntrants.adult * adult)
    + (objEntrants.child * child)
    + (objEntrants.senior * senior);
}

module.exports = { calculateEntry, countEntrants };

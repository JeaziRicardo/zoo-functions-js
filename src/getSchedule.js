const data = require('../data/zoo_data');

let officeHour = '';
let exhibition = '';
const speciesName = data.species.map((specie) => specie.name);
const daysOfTheWeek = Object.keys(data.hours);

const weekSchedule = () => Object.entries(data.hours).reduce((acc, curr) => {
  if (curr[1].open === 0) {
    officeHour = 'CLOSED';
    exhibition = 'The zoo will be closed!';
  } else {
    officeHour = `Open from ${curr[1].open}am until ${curr[1].close}pm`;
    exhibition = data.species.filter((specie) => specie.availability.includes(curr[0]))
      .map((animal) => animal.name);
  }
  if (!acc[curr[0]]) acc[curr[0]] = { officeHour, exhibition };
  return acc;
}, {});

function getSchedule(scheduleTarget) {
  if (daysOfTheWeek.includes(scheduleTarget)) {
    return Object.entries(data.hours).reduce((acc, curr) => {
      if (curr[0] === scheduleTarget) {
        acc[scheduleTarget] = Object.values(weekSchedule())[Object
          .keys(weekSchedule()).indexOf(scheduleTarget)];
      }
      return acc;
    }, {});
  }
  if (speciesName.includes(scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return weekSchedule();
}

module.exports = getSchedule;

const data = require('../data/zoo_data');

function findEmployee(obj) {
  const objEmployee = data.employees
    .find((employee) => obj.name === employee.firstName
    || obj.name === employee.lastName
    || obj.id === employee.id);
  if (!objEmployee) {
    throw new Error('Informações inválidas');
  }
  return objEmployee;
}

function objEmployees(obj) {
  const objName = {
    id: findEmployee(obj).id,
    fullName: `${findEmployee(obj).firstName} ${findEmployee(obj).lastName}`,
    species: findEmployee(obj).responsibleFor.map((id) => data.species
      .find((specie) => id === specie.id).name),
    locations: findEmployee(obj).responsibleFor.map((id) => data.species
      .find((specie) => id === specie.id).location),
  };
  return objName;
}

function getEmployeesCoverage(obj) {
  if (!obj) {
    return data.employees.map((employee) => objEmployees(employee));
  }
  if (obj.name || obj.id) {
    return objEmployees(obj);
  }
}

module.exports = getEmployeesCoverage;

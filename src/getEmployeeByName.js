const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees
    .find((employee) => employee.lastName === employeeName || employee.firstName === employeeName);
}

module.exports = getEmployeeByName;

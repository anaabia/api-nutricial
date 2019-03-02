const { isNaN } = require('lodash');

const isValidId = id => !isNaN(parseInt(id, 10));
const isValidArray = array => !isNaN(array) && array.isArray();

module.exports = {
  isValidId
};

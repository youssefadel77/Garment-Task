const _ = require('lodash');
const errors = require('../common/errors.js');

class BaseService {
  constructor() {
    // Errors
    this.UnauthenticatedError = errors.UnauthenticatedError;
    this.UnauthorizedError = errors.UnauthorizedError;
    this.ValidationError = errors.ValidationError;
    this.NotFoundError = errors.NotFoundError;
  }
  parseBoolean(value) {
    return /true/i.test(value);
  }
}

module.exports = BaseService;

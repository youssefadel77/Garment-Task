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
}

module.exports = BaseService;

const _ = require('lodash');

const validation = require('./validation');

class BaseController {
  constructor(config) {
    const { name, path, service, routes } = config;
    this.name = name;
    this.path = path;
    this.service = service;
    this.routes = routes || [];
  }


  async beforeAction(ctx, next) {
    _.set(ctx, '_locals.resource', this.name);
    _.set(ctx, 'validate', this.validate);
    return next();
  }

  validate(schema, data, strict = true) {
    validation.validate(schema, data, strict);
  }
}

module.exports = BaseController;

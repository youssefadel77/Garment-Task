const BaseController = require('../core/baseController');

class RootController extends BaseController {
  constructor() {
    super({
      path: '/',
      routes: [
        {
          method: 'GET',
          path: '/',
          handler: 'index'
        }
      ]
    });
  }

  async index(ctx) {
    ctx.body = { API: '1.0.0' };
  }
}

module.exports = RootController;

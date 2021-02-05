const BaseController = require('../core/baseController');
const { batchSchema, idSchema } = require('../core/validation/schemas');
const { batchService } = require('../services');

class BatchController extends BaseController {
  constructor() {
    super({
      service: batchService,
      path: '/batches',
      routes: [
        {
          method: 'POST',
          path: '/',
          handler: 'create'
        },
        {
          method: 'GET',
          path: '/',
          handler: 'find'
        },
        {
          method: 'GET',
          path: '/count',
          handler: 'count'
        },
        {
          method: 'GET',
          path: '/:batchId',
          handler: 'findById'
        },
        {
          method: 'PUT',
          path: '/:batchId',
          handler: 'update'
        },
        {
          method: 'DELETE',
          path: '/:batchId',
          handler: 'delete'
        }
      ]
    });
  }

  async create(ctx) {
    ctx.validate(batchSchema.create, ctx.request.body);
    ctx.body = await this.service.create(ctx.request.body);
  }

  async find(ctx) {
    ctx.body = await this.service.find();
  }

  async findById(ctx) {
    ctx.validate(idSchema, { id: ctx.params.batchId });
    ctx.body = await this.service.findById(ctx.params.batchId, ctx.request.query);
  }

  async update(ctx) {
    ctx.validate(idSchema, { id: ctx.params.batchId });
    ctx.validate(batchSchema.create, ctx.request.body, false);
    ctx.body = await this.service.update(ctx.params.batchId, ctx.request.body);
  }

  async delete(ctx) {
    ctx.validate(idSchema, { id: ctx.params.batchId });
    ctx.body = await this.service.delete(ctx.params.batchId);
  }

  async count(ctx) {
    ctx.body = await this.service.count(ctx.request.query);
  }
}

module.exports = BatchController;

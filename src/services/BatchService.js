const _ = require('lodash');
const BaseService = require('../core/baseService.js');
const { Batch } = require('../database/mongo/models');

class BatchService extends BaseService {
  async create(data) {
    const batch = await Batch.getOne({ number: data.number });
    if (batch) {
      throw new this.ValidationError('There is  batch with this number !!');
    }
    return Batch.create(data);
  }

  async find() {
    return Batch.getAll();
  }

  async findById(id, params) {
    const batch = await Batch.getOne({ _id: id }, params);
    if (!batch) {
      throw new this.NotFoundError('There is no batch with this id !!');
    }
    return batch;
  }

  async update(id, data) {
    const batch = await Batch.getOne({ _id: id });
    if (!batch) {
      throw new this.NotFoundError('There is no batch with this id !!');
    }
    return Batch.updateById(id, data, { new: true });
  }

  async delete(id) {
    const batch = await Batch.exists({ _id: id });
    if (!batch) {
      throw new this.NotFoundError('There is no batch with this id !!!');
    }
    await Batch.deleteById(id);
    return { message: 'Batch has been deleted successfully' };
  }

  async count(param) {
    const query = {};
    if (param.color) {
      query['color'] = param.color;
    }
    if (param.size) {
      query['size'] = param.size;
    }
    const pipeLine = [
      {
        $match: query
      },
      {
        $group: {
          _id: {
            color: '$color',
            size: '$size'
          },
          total: { $sum: '$quantity' }
        }
      },
      {
        $project: {
          _id: 0,
          total: '$total',
          color: '$_id.color',
          size: '$_id.size'
        }
      }
    ];
    return (await Batch.aggregate(pipeLine, param, false))[0];
  }
}

module.exports = new BatchService();

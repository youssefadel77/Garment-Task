const idSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      pattern: '^[0-9a-fA-F]{24}$'
    }
  },
  required: ['id'],
  additionalProperties: false
};

const batchSchema = require('./batch');
module.exports = {
  idSchema,
  batchSchema
};

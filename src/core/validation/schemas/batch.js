const { COLORS_ENUM } = require('../../../constants/color');
const { SIZES_ENUM } = require('../../../constants/size');
module.exports = {
  create: {
    type: 'object',
    properties: {
      number: { type: 'number', min: 1 },
      size: { type: 'string', enum: SIZES_ENUM },
      color: { type: 'string', enum: COLORS_ENUM },
      quantity: { type: 'number', min: 1 }
    },
    required: ['number', 'size', 'color', 'quantity'],
    additionalProperties: false
  }
};

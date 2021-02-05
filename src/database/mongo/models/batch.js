const mongoose = require('mongoose');
const { Schema } = mongoose;
const { COLORS_ENUM } = require('../../../constants/color');
const { SIZES_ENUM } = require('../../../constants/size');
const batchSchema = new Schema({
  number: { type: Number, unique: true },
  size: { type: String, enum: SIZES_ENUM },
  color: { type: String, enum: COLORS_ENUM },
  quantity: { type: Number }
});

batchSchema.index({
  size: 1,
  color: 1
});
batchSchema.index({
  size: 1
});
batchSchema.index({
  color: 1
});

module.exports = mongoose.model('Batch', batchSchema);

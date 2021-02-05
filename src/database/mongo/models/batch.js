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

module.exports = mongoose.model('Batch', batchSchema);

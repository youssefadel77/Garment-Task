const queryParser = require('./queryParser');
const mongoSanitizer = require('./mongoSanitizer');

module.exports = () => async (ctx, next) => {
  queryParser(ctx);
  mongoSanitizer(ctx);
  await next();
};

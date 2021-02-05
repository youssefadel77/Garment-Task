const koaBody = require('koa-body');
const compress = require('koa-compress');
const cors = require('@koa/cors');

// Routes
const routes = require('./routes');

// Request middlewares
const { requestInterceptors } = require('./request');
// Response middlewares
const { error, notFound } = require('./response');

const middlewares = [error(), compress(), cors(), koaBody(), requestInterceptors(), routes(), notFound()];

module.exports = middlewares;

const API_NAME = 'GARMENT.io Task';

module.exports = {
  api: {
    name: API_NAME,
    version: '1.0',
    host: 'localhost',
    port: process.env.PORT || 8080,
    contextStoreName: 'api'
  },
  common: {
    pageSize: 10,
    maxPageSize: 100
  },
  mongoDB: {
    url: `mongodb://localhost:27017/garment`
  }
};

const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
      title: 'Application title', // Title (required)
      description: 'Application description',
      version: '1.0.0', // Version (required)
    },
  },
  // Path to the API docs
  apis: [path.resolve(__dirname, 'index.js')],
};

module.exports = options;
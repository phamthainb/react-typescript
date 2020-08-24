const argv = require('./argv');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(`.env`),
});

module.exports = parseInt(argv.port || process.env.PORT || '3000', 10);

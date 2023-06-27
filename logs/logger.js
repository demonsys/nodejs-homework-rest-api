const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

const logger = () => {
  const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
    flags: 'a',
  });
  return [morgan('common', { stream: accessLogStream }), morgan('common')];
};
module.exports = logger;

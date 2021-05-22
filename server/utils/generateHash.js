const crypto = require('crypto');

exports.generateMD5 = (value) => {
  return crypto.createHash('md5').update(value).digest('hex');
};

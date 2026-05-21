const crypto = require('crypto');

const secretKey = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');

module.exports = {
    secretKey
};

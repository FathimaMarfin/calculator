const jwt = require('jsonwebtoken');
const { secretKey } = require('../jwtConfig');


function authMiddleware(req, res, next) {
    const authHeader = req.headers(('authorization'));
    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header missing' });
    }   
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({ error: 'Invalid authorization header' });
    }
    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token' });
        }   
        req.user = user;
        next();
    });
    req.user.id
}        



module.exports = {
    authMiddleware
};


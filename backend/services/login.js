const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { secretKey } = require('../jwtConfig');
const { generateToken } = require('../utils/jwtUtils');

async function loginUser(username, password   ) {

    try {
        const user = await User.findOne({ username });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const token = generateToken(user);
        return token;
    }
    
    catch (error) {
        console.error('Login error:', error);
        throw new Error('Login failed');
    }       
}
    module.exports = {
        loginUser
    };
    
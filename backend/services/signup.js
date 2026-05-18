const User = require('../models/user');
const bcrypt = require('bcrypt');

async function createUser(userData) {
    const { username, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const CreatedUser = new User({
        username,
        email,
        password: hashedPassword
    });
    const savedUser = await CreatedUser.save();
    return savedUser; 

}

module.exports = {
    createUser
};
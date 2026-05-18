const userService = require('../services/signup');

async function createUser(req, res) {   
    try {
        const userData = req.body;  
        const user = await userService.createUser(userData);
        res.status(201).json({ user, message: 'User created successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
}

module.exports = { createUser };
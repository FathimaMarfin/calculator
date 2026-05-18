const authService = require('../services/login');

async function login(req, res) {
    try {
        const { username, password } = req.body;
        const token = await authService.loginUser(username, password);
        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        res.status(401).json({ error: 'Invalid username or password' });
    }
}

module.exports = {
    login
};
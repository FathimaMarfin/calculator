const express = require('express');
const router = express.Router();
const history = require('../controllers/history');
const authMiddleware = require('../middleware/auth');

router.post('/save', authMiddleware,async (req, res) => {
    try {
        const { userId, expression, result } = req.body;

        const newHistory = await history.saveHistory(userId, expression, result);
        res.status(201).json(newHistory);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to save history' });
    }
});

router.get('/:userId', authMiddleware, async (req, res) => {
    try {
        const { userId } = req.params;
        const userHistory = await history.getHistoryByUserId(userId);
        res.status(200).json(userHistory);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve history' });
    }
});
     

module.exports = router;
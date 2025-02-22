const express = require('express');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

// Protected route example
router.get('/profile', isAuthenticated, (req, res) => {
    res.json({ message: 'Profile accessed', user: req.user });
});

module.exports = router;
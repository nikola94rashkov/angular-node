const { getDB } = require('../config/db');

const isAuthenticated = async (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Not authenticated' });
    }

    try {
        const db = getDB();
        const usersCollection = db.collection('users');

        const user = await usersCollection.findOne({ _id: req.session.userId });

        if (!user) {
            return res.status(401).json({ message: 'Not authenticated' });
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = { isAuthenticated };
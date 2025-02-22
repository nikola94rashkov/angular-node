const { getDB } = require('../config/db');
const bcrypt = require('bcryptjs');

// Register a new user
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const db = getDB();
        const usersCollection = db.collection('users');

        // Check if user already exists
        const userExists = await usersCollection.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user
        const newUser = { username, email, password: hashedPassword };
        await usersCollection.insertOne(newUser);

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const db = getDB();
        const usersCollection = db.collection('users');

        // Find user by email
        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Save user ID in session
        req.session.userId = user._id;
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// Logout user
const logoutUser = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.clearCookie('connect.sid'); // Clear the session cookie
        res.status(200).json({ message: 'Logout successful' });
    });
};

module.exports = { registerUser, loginUser, logoutUser };
const { getDB } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log('try register');
        const db = getDB();
        const usersCollection = db.collection('users');

        // Check if user already exists
        const userExists = await usersCollection.findOne({ email });

        if (userExists) {
            console.log('user already exists', userExists);
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user
        const newUser = { ...req.body, password: hashedPassword};
        await usersCollection.insertOne(newUser);

        console.log('newUser', newUser)

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        console.error('err', err)
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

   console.log(`loginUser ${email} ${password}`);

    try {
        console.log('try login');
        const db = getDB();

        const usersCollection = db.collection('users');
        console.log('usersCollection', usersCollection)

        const user = await usersCollection.findOne({ email });

        console.log('user email', user)
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        console.log('isMatch', isMatch)
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        req.session.userId = user._id;
        res.status(200).json({ message: 'Login successful', user: { _id: user._id, role: user.role } });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

const logoutUser = async (req, res) => {
    console.log('logoutUser')

    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.clearCookie('connect.sid'); // Clear the session cookie
        res.status(200).json({ message: 'Logout successful' });
    });
};

module.exports = { registerUser, loginUser, logoutUser };
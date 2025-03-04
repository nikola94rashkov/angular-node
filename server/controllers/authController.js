const User = require('../models/User');

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log('Trying to register user:', email);

        const userExists = await User.findOne({ email });

        if (userExists) {
            console.log('User already exists:', email);
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({
            ...req.body,
            password,
        });

        const savedUser = await newUser.save();

        console.log('User registered successfully:', savedUser);

        res.status(201).json({ message: 'User registered successfully', user: savedUser });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    console.log(`Login attempt for user: ${email}`);

    try {
        const user = await User.findOne({ email });

        if (!user) {
            console.log('User not found:', email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            console.log('Invalid password for user:', email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        req.session.userId = user._id;
        console.log('Login successful for user:', user._id);

        res.status(200).json({ message: 'Login successful', user: { _id: user._id, role: user.role } });
    } catch (err) {
        console.error('Error logging in:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

const logoutUser = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).json({ message: 'Logout failed' });
        }

        res.clearCookie('connect.sid');
        res.status(200).json({ message: 'Logout successful' });
    });
};

module.exports = { registerUser, loginUser, logoutUser };
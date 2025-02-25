const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Session configuration
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            maxAge: 1000 * 60 * 60 * 24 * 14, // 14 days
        },
    })
);


app.get('/', (req, res) => {
    res.send('Hello, this is the backend server!');
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

app.get('*', (req, res) => {
    res.send('This is a wildcard route');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
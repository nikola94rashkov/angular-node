const { MongoClient } = require('mongodb');

let db;

const connectDB = async () => {
    try {
        const client = new MongoClient(process.env.MONGO_URI);
        await client.connect();
        db = client.db('user_auth'); // Use your database name
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const getDB = () => db;

module.exports = {
    connectDB,
    getDB
};
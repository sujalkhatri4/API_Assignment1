const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI; // Ensure this matches your .env variable name

const InitiateMongoServer = async () => {
    try {
        console.log('MongoDB URI:', MONGO_URI); // Log the URI for debugging
        await mongoose.connect(MONGO_URI);
        console.log("Connected to DB");
    } catch (e) {
        console.error("Error connecting to MongoDB:", e.message); // More descriptive error
    }
};

module.exports = InitiateMongoServer;

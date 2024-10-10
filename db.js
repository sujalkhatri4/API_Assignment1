const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB");
    } catch (e) {
        console.error("Error connecting to MongoDB:", e);
    }
};

module.exports = InitiateMongoServer;

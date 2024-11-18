const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URL = "mongodb://localhost:27017/sahilEMP"

const connectDb = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log(`MongoDb server connected ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`MongoDb server not connected ${error}`)
    }
}

module.exports = connectDb
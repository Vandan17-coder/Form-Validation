// Mongoose is a library that connects Node.js with MongoDB.
const mongoose = require("mongoose");

const connectDB = async () => {
    
    try {
        // Connect to MongoDB using the URI stored in .env.
        await mongoose.connect(process.env.MONGODB_URI);
        // process.env reads environment variables loaded from the .env file.

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

};

module.exports = connectDB;
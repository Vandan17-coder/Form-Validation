const mongoose = require("mongoose");

// Defines how a user document should look.
// Create a new Schema (blueprint) object once when the server starts.
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

// Create a User model to interact with the users collection.
const User = mongoose.model("User", userSchema);

// Make the User model available to other files.
module.exports = User;
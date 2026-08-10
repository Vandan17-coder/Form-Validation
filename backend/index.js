// dotenv reads the .env file and stores its values in process.env.
require("dotenv").config();

// Import the Express library.
const express = require("express")

// Create the main Express server.
const app = express();

const PORT = 5000;

const authRoutes = require("./routes/authRoutes");

const connectDB = require("./config/db");

// Convert incoming JSON data into a JavaScript object (req.body).
app.use(express.json());

connectDB();

app.use(authRoutes);

app.get("/", (req, res) => {
    res.send("Hello Backend!");
})

// Start the server and listen for requests.
app.listen(PORT, () => {
    console.log(`Server ruuning on port ${PORT}`);
})


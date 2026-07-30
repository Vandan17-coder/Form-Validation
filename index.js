// Import the Express library.
const express = require("express")

// Create the main Express server.
const app = express();

const PORT = 5000;

const authRoutes = require("./routes/authRoutes");

// Convert incoming JSON data into a JavaScript object (req.body).
app.use(express.json());

app.use(authRoutes);

app.get("/", (req, res) => {
    res.send("Hello Backend!");
})

// Start the server and listen for requests.
app.listen(PORT, () => {
    console.log(`Server ruuning on port ${PORT}`);
})


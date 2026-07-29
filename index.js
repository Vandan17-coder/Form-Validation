const express = require("express")

const app = express();

const PORT = 5000;

const users = [];

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello Backend!");
})

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const existingUser = users.find(user => user.email === email );

    if(existingUser){
        return res.status(400).json({
            success: false,
            message: "Email already exists"
        });
    }

    users.push({ name, email, password });

    console.log(users);

    res.status(201).json({
        success: true,
        message: "Signup Successful"
    });
});

app.listen(PORT, () => {
    console.log(`Server ruuning on port ${PORT}`);
})


// Import bcrypt to hash and verify passwords.
const bcrypt = require("bcrypt");

const User = require("../models/User");

const signup = async (req,res) => {

    //req.body stores the clients submited data(JSON) as a JavaScript object
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });

    }

    // Find a user with the given email.
    const existingUser = await User.findOne({ email });


    //res.status(409).json() sets the HTTP status code to 409 (Conflict) and sends a JSON response back to the client.
    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: "Email already exists"
        });
    }

    // Convert the plain password into a secure hashed password.
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Save a new user in MongoDB.
    await User.create({
        name,
        email,
        password: hashedPassword
    });

    res.status(201).json({
        success: true,
        message: 'Signup successful'
    });

};

const login = async (req, res) => {

    const {email, password} = req.body;

    const user = await User.findOne({ email });

    if(!user){
        return res.status(404).json({
            message: "User not found"
        });
    }

    // Compare the entered password with the hashed password.
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    //If both the email exists and the password matches:
    return res.status(200).json({
        message: "Login successful"
    });

}

// module.exports makes functions or variables available to other JavaScript files.
module.exports = { 
    signup,
    login
 };
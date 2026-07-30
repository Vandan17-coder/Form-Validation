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
    
    // Save a new user in MongoDB.
    await User.create({
        name,
        email,
        password
    });

    res.status(201).json({
        success: true,
        message: 'Signup successful'
    });

};

// module.exports makes functions or variables available to other JavaScript files.
module.exports = { signup };
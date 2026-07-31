const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

    // Get the Authorization header from the request.
    const authHeader = req.headers.authorization; 

    if(!authHeader) {
        return res.status(401).json({
            message: "Access denied. No token provided."
        });
    }

    //header looks like (Authorization: Bearer eyJhbGc...)
    // Extract only the JWT token from "Bearer <token>".
    const token = authHeader.split(" ")[1];

    try {

        // Verify the token and get the stored user information.
        const decoded = jwt.verify(token, process.env.JWT_SECRET);   
        
        // Store the logged-in user's data in the request so other controllers can use it.
        req.user = decoded;

        // Move to the next middleware or route handler.
        next();

    } catch {

        return res.status(401).json({
            message: "Invalid token"
        });
    }

}

module.exports = verifyToken;
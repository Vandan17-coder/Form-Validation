// Import the Express library.
const express = require("express");

// app = Main server (in index.js const app = express(); ) 
// router = A mini route manager for related routes (e.g., auth, products, orders).


//              │a
//              ▼
//        app (Main Server)
//  
//              │
//       ┌──────┼────────┐
//       │      │        │
//       ▼      ▼        ▼
//      Router Router  Router
//      Auth  Product Order

const router = express.Router();

// Import signup and login controllers.
const { signup, login } = require("../Controllers/authController");

router.post("/signup", signup);

// Handle user login requests.
router.post("/login", login);

module.exports = router;
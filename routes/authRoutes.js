// Import the Express library.
const express = require("express");

// app = Main server (in index.js const app = express(); ) 
// router = A mini route manager for related routes (e.g., auth, products, orders).
express()

//              │
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

const { signup } = require("../Controllers/authController");

router.post("/signup", signup);

module.exports = router;
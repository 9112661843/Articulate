const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (Rules)
app.use(cors()); // Allows Frontend to talk to Backend
app.use(express.json()); // Allows us to read JSON data

// Basic Route (To test if server is working)
app.get('/', (req, res) => {
  res.json({ 
    message: "Welcome to CA Animation Ecosystem API", 
    status: "Active",
    timestamp: new Date()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
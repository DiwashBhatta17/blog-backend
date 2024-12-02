const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config(); // Load environment variables from .env

const app = express();

// Connect to MongoDB
connectDB();

// Middleware

// Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api', blogRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


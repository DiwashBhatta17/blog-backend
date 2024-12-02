const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
const cors = require('cors');


dotenv.config(); // Load environment variables from .env

const app = express();

// Connect to MongoDB
connectDB();

// Middleware

// Enable CORS
app.use(cors());

// Or enable CORS for specific origins (e.g., from your frontend URL)
app.use(cors({
  origin: 'http://127.0.0.1:5173', // Replace with your frontend URL
}));
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api', blogRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


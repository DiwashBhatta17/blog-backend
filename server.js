const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config(); // Load environment variables from .env

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); 
app.use(cors({
  origin: 'http://127.0.0.1:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
// Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api', blogRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


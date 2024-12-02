const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Remove the deprecated options
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Stop the application if DB connection fails
  }
};

module.exports = connectDB;

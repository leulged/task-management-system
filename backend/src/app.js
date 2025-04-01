// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/userRoutes');

// // Initialize dotenv for environment variables
// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // Use the user routes for API endpoints
// app.use('/api/users', userRoutes);
// // Middleware
// app.use(cors());
// app.use(express.json()); // Body parser for JSON data

// // Basic route to check if the server is running
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// // Set up the port and start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const User = require('../models/User');
const router = express.Router();

// POST route to handle user registration
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if the user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create the new user
      const user = await User.create({
        name,
        email,
        password,
      });
  
      res.status(201).json({
        message: 'User registered successfully',
        userId: user._id,
      });
    } catch (error) {
      console.error('Error in registration route:', error);  // Log the error
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
module.exports = router;

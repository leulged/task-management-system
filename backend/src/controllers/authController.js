// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // Register new user
// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;
  
//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const user = await User.create({
//       name,
//       email,
//       password,
//     });

//     const token = jwt.sign(
//       { userId: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: '30d' }
//     );

//     res.status(201).json({
//       message: 'User registered successfully',
//       token,
//       userId: user._id,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Login user and return JWT token
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign(
//       { userId: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: '30d' }
//     );

//     res.status(200).json({
//       message: 'User logged in successfully',
//       token,
//       userId: user._id,
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = { registerUser, loginUser };

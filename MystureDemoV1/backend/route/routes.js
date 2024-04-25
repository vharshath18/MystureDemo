require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Booking=require('../models/booking');
const Razorpay = require('razorpay');
const razorpay = new Razorpay({
  key_id: 'YOUR_RAZORPAY_KEY_ID',
  key_secret: 'YOUR_RAZORPAY_KEY_SECRET'
});

// Register a new user
router.post('/register', async (req, res) => {
  try {
    console.log(req.body);
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
          return res.status(400).json({ message: 'Email already exists' });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          phone: req.body.phone,
          occupation: req.body.occupation,
          password: hashedPassword,
      });

      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


// Login a user
router.post('/login', async (req, res) => {
  try {
    console.log(req.body);
    // Check if the email exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: 'Email not found' });
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Create and sign a JWT token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.header('auth-token', token).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//booking of user
router.post('/bookings', async (req, res) => {
    try {
        const { name, email, phone, address, location, guests, arrivals, leaving } = req.body;
        
        const newBooking = new Booking({
            name,
            email,
            phone,
            address,
            location,
            guests,
            arrivals,
            leaving
        });
        const savedBooking = await newBooking.save();
        console.log('sucess')

        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/create-order', async (req, res) => {
    try {
      const { amount } = req.body;
      const options = {
        amount: amount * 100, // Amount in the smallest currency unit
        currency: 'INR',
        receipt: 'order_rcptid_' + new Date().getTime(), // Generate a unique receipt
      };
  
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong' });
    }
  });
module.exports = router;

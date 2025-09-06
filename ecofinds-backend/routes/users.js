// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // ✅ import User model

// Create user
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password }); // ✅ create user
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err); // 🔍 log error to console
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

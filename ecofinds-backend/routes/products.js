const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // must match export
const auth = require('../middleware/auth'); // import auth middleware

// Create a new product (protected route)
router.post('/', auth, async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });
    res.status(201).json(newProduct);
  } catch (err) {
    console.error(err); // log errors
    res.status(500).json({ error: err.message });
  }
});

// Get all products (public route)
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


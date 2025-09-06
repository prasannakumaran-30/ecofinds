// server.js
const express = require('express');
const app = express();
require('dotenv').config();

const sequelize = require('./config/db'); // import Sequelize instance

// Middleware
app.use(express.json());

// Routes
const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// Auth route
const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

// Test route
app.get('/', (req, res) => {
  res.send('EcoFinds Backend is running!');
});

// Async function to connect DB and start server
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Test DB connection
    console.log('Database connection established successfully!');

    await sequelize.sync({ alter: true }); // Sync models
    console.log('Database models synced!');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

startServer();

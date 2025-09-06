const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    // Get token from headers
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'No token provided' });

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Store user info for use in routes
    next(); // Proceed to the route
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = auth;

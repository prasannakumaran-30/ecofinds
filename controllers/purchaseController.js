const pool = require('../config/db');

exports.checkout = async (req, res) => {
  const { user_id } = req.body;
  try {
    // Get items from cart
    const cartItems = await pool.query('SELECT * FROM cart WHERE user_id = $1', [user_id]);

    // Move items to purchases table
    for (let item of cartItems.rows) {
      await pool.query(
        'INSERT INTO purchases (user_id, product_id, quantity) VALUES ($1, $2, $3)',
        [item.user_id, item.product_id, item.quantity]
      );
    }

    // Empty user's cart
    await pool.query('DELETE FROM cart WHERE user_id = $1', [user_id]);

    res.json({ message: 'Checkout successful!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPurchases = async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM purchases WHERE user_id = $1', [user_id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


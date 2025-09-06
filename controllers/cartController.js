const pool = require('../config/db');

exports.addToCart = async (req, res) => {
  const { user_id, product_id, quantity } = req.body;  // destructure JSON from POST body
  try {
    const result = await pool.query(
      'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
      [user_id, product_id, quantity]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCart = async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM cart WHERE user_id = $1',
      [user_id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM cart WHERE id = $1', [id]);
    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


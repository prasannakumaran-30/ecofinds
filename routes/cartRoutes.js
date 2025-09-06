const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/', cartController.addToCart);
router.get('/:user_id', cartController.getCart);
router.delete('/:id', cartController.removeFromCart);

module.exports = router;


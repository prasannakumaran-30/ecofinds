const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

router.post('/', purchaseController.checkout);
router.get('/:user_id', purchaseController.getPurchases);

module.exports = router;


const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // must have this

const cartRoutes = require('./routes/cartRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');

app.use('/cart', cartRoutes);
app.use('/purchase', purchaseRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));


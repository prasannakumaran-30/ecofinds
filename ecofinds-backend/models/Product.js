const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // import Sequelize instance

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true }
});

module.exports = Product; // ✅ must export like this

const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'categories'
  });
  module.exports = Category;
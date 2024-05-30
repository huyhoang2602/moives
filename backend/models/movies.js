const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const Category = require('./categorys');
const Country = require('./countrys');


const Movie = sequelize.define('Movie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  posterUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  duration: {
    type: DataTypes.INTEGER
  },
  release_year: {
    type: DataTypes.INTEGER
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categories',
      key: 'id'
    }
  },
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'countries',
      key: 'id'
    }
  }
}, {
  tableName: 'movies',
  timestamps:false
});

// Định nghĩa mối quan hệ giữa Movie và Category
Movie.belongsTo(Category, { foreignKey: 'category_id' });
sequelize.models.Category.hasMany(Movie, { foreignKey: 'category_id' });

// Định nghĩa mối quan hệ giữa Movie và Country
Movie.belongsTo(Country, { foreignKey: 'country_id' });
sequelize.models.Country.hasMany(Movie, { foreignKey: 'country_id' });

module.exports = Movie;
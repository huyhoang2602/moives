const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const Movie = require('./Movie');

const Episode = sequelize.define('Episode', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  duration: {
    type: DataTypes.INTEGER
  },
  season: {
    type: DataTypes.INTEGER
  },
  episode_number: {
    type: DataTypes.INTEGER
  },
  movie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Movie,
      key: 'id'
    }
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'episodes'
});

// Định nghĩa mối quan hệ giữa Episode và Movie
Episode.belongsTo(Movie, { foreignKey: 'movie_id' });
Movie.hasMany(Episode, { foreignKey: 'movie_id' });

module.exports = Episode;
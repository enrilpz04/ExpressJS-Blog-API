const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Author = require('./authors.model'); // Importa el modelo Author

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  creation_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'authors', // Nombre de la tabla en la base de datos
      key: 'id'
    }
  }
}, {
  tableName: 'posts',
  timestamps: false
});

module.exports = Post;
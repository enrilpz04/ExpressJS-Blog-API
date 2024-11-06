const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Author,
      key: 'id'
    }
  }
}, {
  tableName: 'posts',
  timestamps: false
});

Post.belongsTo(Author, { foreignKey: 'authorId' });
Author.hasMany(Post, { foreignKey: 'authorId' });

module.exports = Post;
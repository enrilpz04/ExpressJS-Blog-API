const sequelize = require('../config/db');
const Author = require('./authors.model');
const Post = require('./posts.model');

Post.belongsTo(Author, { foreignKey: 'authorId' });
Author.hasMany(Post, { foreignKey: 'authorId' });

module.exports = {
    Author,
    Post,
    sequelize
}
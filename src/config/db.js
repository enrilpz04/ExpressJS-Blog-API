const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog-api', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
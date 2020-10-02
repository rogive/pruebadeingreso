const { Sequelize } = require('sequelize');
const key = require("./keydb");

const sequelize = new Sequelize(key.database, key.user, key.password, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
const { Sequelize } = require('sequelize');
const key = require("./keydb");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});

module.exports = sequelize;
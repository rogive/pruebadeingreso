const mysql = require('mysql');
const key = require("./keydb");

function database() {
  const db = mysql.createConnection(key);

  db.connect(err => {
    if (err) {
      throw err;
    }
    console.log('MySQL Connected');
  });

  let sql ="CREATE DATABASE nodemysqlivan"
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
  })

  return db;
}

module.exports = database;
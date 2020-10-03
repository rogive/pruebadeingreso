const mysql2 = require("mysql2");
const key = require("./keydb");

async function database() {
  const db = mysql2.createConnection({
    host: key.host,
    user: key.user,
    password : key.password
  });

  db.connect(err => {
    if (err) { throw err }
  });

  let promiseDB = new Promise(() => {
    db.query("CREATE DATABASE IF NOT EXISTS pruebaingresoceiba", (err) => {
        if (err) { throw err }
    })
  });
  let result = await promiseDB;

  return result;
}

module.exports = database;
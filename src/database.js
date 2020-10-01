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

  // CREAR BASE DE DATOS
/*   let sqlCreateDatabase ="CREATE DATABASE nodemysqlivan"
  db.query(sqlCreateDatabase, (err) => {
    if (err) { throw err }
  }) */

  // CREAR TABLA
/*   let sqlCreateTable ="CREATE TABLE pagos(documentoIdentificacionArrendatario INT(10), codigoInmueble VARCHAR(255), valorPagado VARCHAR(255), fechaPago VARCHAR(255), PRIMARY KEY(documentoIdentificacionArrendatario))"
    db.query(sqlCreateTable, (err) => {
      if (err) { throw err }
  }) */

// POSTEAR UN REGISTRO
/*   let postData = { "documentoIdentificacionArrendatario": "1036242622", "codigoInmueble": "8471", "valorPagado": "1000000", "fechaPago": "25/09/2020" }
  let sqlInsertData ="INSERT INTO pagos SET ?"
  db.query(sqlInsertData, postData, (err) => {
    if (err) { throw err }
    console.log('Pago Añadido');
  }) */

// LEER DATOS DE UNA TABLA
/*   let sqlList ="SELECT * FROM pagos"
  db.query(sqlList, (err, results) => {
    if (err) { throw err }
    console.log(results);
  }) */

// ACTUALIZAR DATO DE UNA TABLA

/*   let idunique = 1036246622
  let newDocument = '1024666666'
  let sqlUpdate = `UPDATE pagos SET documentoIdentificacionArrendatario = '${newDocument}' WHERE documentoIdentificacionArrendatario = ${idunique}`
  db.query(sqlUpdate, err => {
    if (err) { throw err }
    console.log('Document Updated');
  }) */

// ELIMINAR DATO DE UNA TABLA

/*   let idunique = 1024026666
  let newDocument = '1024666666'
  let sqlDelete = `DELETE FROM pagos WHERE documentoIdentificacionArrendatario = ${idunique}`
  db.query(sqlDelete, err => {
    if (err) { throw err }
    console.log('Document deleted');
  }) */

  return db;
}

module.exports = database;
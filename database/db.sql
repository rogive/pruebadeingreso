CREATE DATABASE database_pruebaingreso;

USE database_pruebaingreso;

CREATE TABLE pagos(
/*   id INT(11) NOT NULL, */
  documentoIdentificacionArrendatario VARCHAR(16) NOT NULL,
  codigoInmueble VARCHAR(60) NOT NULL,
  valorPagado VARCHAR(100) NOT NULL,
  fechaPago VARCHAR(100) NOT NULL
);

ALTER TABLE pagos
  ADD PRIMARY KEY (id)

/* ALTER TABLE pagos
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2;
 */
DESCRIBE pagos;
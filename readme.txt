## pruebadeingreso

* Para inicializar el api debes tener instalado mysql previamente y tener creada la base de datos que se ha asignado.
* Una vez se cumpla el anterior requerimiento, debes agregar a la ruta ./pruebadeingreso el archivo .env con la siguiente estructura:
PORT=8084
DATABASE=""
USER=""
PASSWORD=""
HOST=""
DIALECT="mysql"
RENT= 1000000

* Ahora se debe descargar los modulos del api con el siguiente comando:
npm i

* Esas fueron las configuraciones necesarias, ahora para iniciar el api solo se debe ejecutar el siguiente comando:
npm start

* Para iniciarlizar las pruebas unitarias se debe ejecutar el siguiente comando:
npm test
const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 9000;

//configuraciones
app.set("port", PORT);
let bodyParser = require("body-parser");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use(require("./routs/prestamosRout.js"));
app.use(require("./routs/usuariosRout.js"));

//Conecion BD
require("./config/conexion");

//iniciando servidor
app.listen(app.get("port"), (error) => {
  console.log("Servidor corriendo :", app.get("port"));
});

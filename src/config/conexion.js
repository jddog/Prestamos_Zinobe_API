let mongoose = require("mongoose");

//Conexion BD
mongoose.connect(
  "mongodb+srv://admin:admin123@cluster0.vhn4x.mongodb.net/prestamosZinobe?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("connected", () => {
  console.log("Conectado a bd");
});

module.exports = mongoose;

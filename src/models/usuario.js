let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let usuarioSchema = new Schema(
  {
    Cedula: { type: String },
    Nombre: { type: String },
    Email: { type: String },
    usuarioRechazado: { type: Boolean },
  },
  { versionKey: false }
);

let Usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = Usuario;

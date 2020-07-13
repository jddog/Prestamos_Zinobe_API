let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let prestamoSchema = new Schema(
  {
    Cedula: { type: String },
    Valor: { type: Number },
    EstadoCredito: { type: String },
    CreditoPagado: { type: Boolean },
    FechaPago: { type: String },
  },
  { versionKey: false }
);

let Prestamo = mongoose.model("prestamos", prestamoSchema);

module.exports = Prestamo;

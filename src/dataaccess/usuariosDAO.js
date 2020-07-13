let Usuario = require("../models/usuario");

function obtenerUsuarioPorCedula(req, res) {
  var cedulaUsuario = req.params.cedula;
  Usuario.findOne({ Cedula: cedulaUsuario }, {}).then((usuario) => {
    return res.status(200).send(usuario);
  });
}

function obtenerUsuarios(req, res) {
  Usuario.find().then((usuarios) => {
    return res.status(200).send(usuarios);
  });
}

module.exports = {
  obtenerUsuarioPorCedula,
  obtenerUsuarios,
};

const { Router } = require("express");
const router = Router();
//dataacces
const usuariosDAO = require("../dataaccess/usuariosDAO");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

  res.header("Access-Control-Allow-Headers", "content-type");

  next();
});

router.get(
  "/usuarios/obtenerUsuarioPorCedula/:cedula",
  usuariosDAO.obtenerUsuarioPorCedula
);

router.get("/usuarios/obtenerUsuarios/", usuariosDAO.obtenerUsuarios);

module.exports = router;

const { Router } = require("express");
const router = Router();
//dataacces
const prestamosDAO = require("../dataaccess/prestamosDAO");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

  res.header("Access-Control-Allow-Headers", "content-type");

  next();
});

router.get(
  "/prestamos/obtenerPrestamosPorEstado/:estadoPrestamo",
  prestamosDAO.obtenerPrestamosPorEstado
);

router.get(
  "/prestamos/obtenerHistorialPrestamosPorCedula/:Cedula",
  prestamosDAO.obtenerHistorialPrestamosPorCedula
);

router.get(
  "/prestamos/obtenerPrestamoPorPagarPorCedula/:Cedula",
  prestamosDAO.obtenerPrestamoPorPagarPorCedula
);

router.post("/prestamos/registrarPrestamo", prestamosDAO.registrarPrestamo);

module.exports = router;

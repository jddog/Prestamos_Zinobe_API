let Prestamo = require("../models/prestamo");
let Usuario = require("../models/usuario");
const { request } = require("express");

function registrarPrestamo(req, res) {
  let request = req.body.usuarioPrestamo;
  let usuarioNuevo = false;
  Usuario.findOne({ Cedula: request.Cedula }, {}).then((usuario) => {
    if (!usuario) {
      usuarioNuevo = true;

      let nuevoUsuario = new Usuario({
        Cedula: request.Cedula,
        Nombre: request.Nombre,
        Email: request.Email,
        usuarioRechazado: false,
      });

      nuevoUsuario.save((error) => {
        if (error) {
          return res
            .status(500)
            .send(
              "Ha ocurrido un error al registrar el usuario: " +
                JSON.stringify(error)
            );
        }
      });
    } else if (usuario.usuarioRechazado) {
      return res
        .status(500)
        .send(
          "Lo sentimos, anteriormente ya se le rechazo la solicitud de un prestamo"
        );
    }

    if (request.EstadoCredito === "Rechazado") {
      usuario.usuarioRechazado = true;

      Usuario.findByIdAndUpdate(
        usuario._id,
        usuario,
        (err, usuarioActualizado) => {
          if (err) {
            return res
              .status(500)
              .send("Ha ocurrido un error al actualizar el usuario");
          }
        }
      );
    }

    let nuevoPrestamo = new Prestamo({
      Cedula: request.Cedula,
      Valor: request.Valor,
      EstadoCredito: usuarioNuevo ? "Aprobado" : request.EstadoCredito,
      CreditoPagado: request.CreditoPagado,
      FechaPago: request.FechaPago,
    });

    nuevoPrestamo.save((error) => {
      if (error) {
        return res
          .status(500)
          .send(
            "Ha ocurrido un error al registrar el prestamo: " +
              JSON.stringify(error)
          );
      } else {
        return res.status(200).send(true);
      }
    });
  });
}

function obtenerPrestamosPorEstado(req, res) {
  let estadoFiltro = req.params.estadoPrestamo;
  let prestamosRetorno = [];

  Usuario.find().then((usuarios) => {
    Prestamo.find({ EstadoCredito: estadoFiltro }, {}).then((prestamos) => {
      prestamos.forEach((prestamo) => {
        let requestPrestamo = {};
        let usuarioInformacion = usuarios.find(
          (f) => f.Cedula === prestamo.Cedula
        );
        requestPrestamo._id = prestamo._id;
        requestPrestamo.Valor = prestamo.Valor;
        requestPrestamo.EstadoCredito = prestamo.EstadoCredito;
        requestPrestamo.CreditoPagado = prestamo.CreditoPagado;
        requestPrestamo.FechaPago = prestamo.FechaPago;
        requestPrestamo.Cedula = usuarioInformacion.Cedula;
        requestPrestamo.Nombre = usuarioInformacion.Nombre;
        requestPrestamo.Email = usuarioInformacion.Email;

        prestamosRetorno.push(requestPrestamo);
      });
      return res.status(200).send(prestamosRetorno);
    });
  });
}

function obtenerHistorialPrestamosPorCedula(req, res) {
  Prestamo.find({ Cedula: req.params.Cedula }, {}).then(
    (historialPrestamos) => {
      return res.status(200).send(historialPrestamos);
    }
  );
}

function obtenerPrestamoPorPagarPorCedula(req, res) {
  Prestamo.findOne(
    { Cedula: req.params.Cedula, CreditoPagado: false },
    {}
  ).then((prestamoSinPagar) => {
    return res.status(200).send(prestamoSinPagar);
  });
}

function pagarPrestamo(req, res) {
  let prestamo = req.body.prestamo;
  prestamo.CreditoPagado = true;
  Prestamo.findByIdAndUpdate(
    prestamo._id,
    prestamo,
    (err, usuarioActualizado) => {
      if (err) {
        return res
          .status(500)
          .send("Ha ocurrido un error al actualizar el prestamo");
      } else {
        return res.status(200).send(true);
      }
    }
  );
}

module.exports = {
  registrarPrestamo,
  obtenerPrestamosPorEstado,
  obtenerHistorialPrestamosPorCedula,
  obtenerPrestamoPorPagarPorCedula,
  pagarPrestamo,
};

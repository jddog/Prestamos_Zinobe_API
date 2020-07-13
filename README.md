# Prestamos_Zinobe_API Servicio API REST (Back - End)

Para utilizar este proyecto se necesita tener las siguientes herramientas

Descargar npm y node js

https://nodejs.org/en/
Clonar proyecto

Se debe ejecutar el siguiente comando estando en el directorio que se desee obetener el codigo
git clone https://github.com/jddog/Prestamos_Zinobe_API.git

Luego ingresar a la carpeta generada y ejecutar para instalar todas las dependencias
npm install --save

Lanzar Servidor
Ejecutar en la linea de comandos a nivel donde se encuentra el proyecto
npm run dev

Metodos del servicio prestamos
Para consultar todos los prestamos por estado, se debe enviar una peticion de tipo GET a la siguiente url enviando el estado a consultar: Aprobado - Rechazado
Localhost:
http://localhost:9000/prestamos/obtenerPrestamosPorEstado/:estadoPrestamo

Para consultar un historial de prestamos por medio de la cedula, se debe enviar una peticion de tipo GET a la siguiente url enviando la cedula a consultar
Localhost:
http://localhost:9000/prestamos/obtenerHistorialPrestamosPorCedula/:Cedula

Para consultar los prestapos por pagar por medio de la cedula, se debe enviar una peticion de tipo GET a la siguiente url enviando la cedula a consultar
Localhost:
http://localhost:9000/prestamos/obtenerPrestamoPorPagarPorCedula/:Cedula

Para crear un prestamo, se debe enviar una peticion POST a la siguinete URL
Localhost:
http://localhost:9000/prestamos/registrarPrestamo

Para pagar un prestamo, se debe enviar una peticion POST a la siguinete URL
Localhost:
http://localhost:9000/prestamos/pagarPrestamo

Localhost:
http://localhost:9000/

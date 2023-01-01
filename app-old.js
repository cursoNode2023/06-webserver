
const hhtp = require('http');

// Crear servidor web con Node
// req = 'request'. Solicitudes que recibe el servidor web
// res =  'response'. Respuestas que da el servidor web
hhtp.createServer( (req, res) => {
    res.write('Hola Mundo');
    res.end();
})
.listen( 8080 ); // Puerto de escucha que usará el servidor web

console.log('Escuchando el puerto', 8080);

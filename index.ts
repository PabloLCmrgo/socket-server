import { Server } from "./classes/server";
import { SERVER_PORT } from "./global/enviroment";
import router from "./routes/routes";
import bodyParser from 'body-parser';
import cors from 'cors';


const server = new Server();

/*
* El body-parser siempre se declara antes de la ruta
*/
server.app.use(bodyParser.urlencoded({ extended: true })); // Para que pase la petición de un formato JSON
server.app.use(bodyParser.json());

//CORS
server.app.use(cors({ origin: true, credentials: true }));

// Rutas de servicios
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
});
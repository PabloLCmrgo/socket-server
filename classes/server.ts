import express from 'express';
import { SERVER_PORT } from '../global/enviroment';

export class Server { // Cuando se agrega default es lo unico que se importa en el archivo


    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;
    }

    //Método para levantar el servidor
    start(callback: () => void) {
        this.app.listen(this.port, callback);
    }

}


import express, { Application } from 'express';
import productRouter from './products/infrastructure/http/router/ProductRouter';
import bodyParser from 'body-parser';
import { Datasource } from './Datasource';

class Server {
    private app: Application;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.initializeDatabase();
        this.configureMiddleware();
        this.configureRoutes();
    }

    private initializeDatabase(): void {
        Datasource.initialize()
            .then(() => {
                console.log('Connection Initialized')
            })
    }

    private configureMiddleware(): void {
        this.app.use(bodyParser.json());
        
    }

    private configureRoutes(): void {
        this.app.use("/products", productRouter);
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en http://localhost:${this.port}`);
        });
    }
}

export default Server;
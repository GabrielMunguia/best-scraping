import express ,{Application}from 'express';
import cors from 'cors'
import amazonRouter from '../routes/amazon' 
class Server{
    private app:Application;
    private port:string;
    private apiPaths={
        amazon:'/api/amazon'
    }

    constructor(){
        this.app=express();
        this.port=process.env.PORT??"8081";

        //metodos iniciales
        this.middlewares();

        //rutas
        this.routes();

        //coneccion a la base de datos

        this.dbConnection();
    }

    middlewares(){
        //CORS
       this.app.use( cors() );
       
       //Lectura del body, para permitir JSON
       this.app.use( express.json() );

       //carpeta publica
       this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.apiPaths.amazon,amazonRouter);
    }

    async dbConnection(){
    //  ^-^
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.clear();
            console.log('The server is running on the port : '+this.port)
        });
    }
}

export default Server;
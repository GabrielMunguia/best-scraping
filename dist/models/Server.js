"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const amazon_1 = __importDefault(require("../routes/amazon"));
class Server {
    constructor() {
        var _a;
        this.apiPaths = {
            amazon: '/api/amazon'
        };
        this.app = (0, express_1.default)();
        this.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "8081";
        //metodos iniciales
        this.middlewares();
        //rutas
        this.routes();
        //coneccion a la base de datos
        this.dbConnection();
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Lectura del body, para permitir JSON
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.amazon, amazon_1.default);
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            //  ^-^
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.clear();
            console.log('The server is running on the port : ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map
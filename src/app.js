import express, { json } from "express";
import morgan from "morgan";

//Puerto

//Importacion de rutas
import rutaUsuarios from "./routes/usuario";
import rutaVerficacion from "./routes/verificationtoken";

//iniacializaciones
const app = express();

//midleware
app.use(morgan("dev"));
app.use(json());

//routes
app.use("/api/usuarios", rutaUsuarios);
app.use("/api/token", rutaVerficacion);

export default app;

import express, { json } from "express";
import morgan from "morgan";
import db from "./models/usuario";
import bodyParser from "body-parser";
import passport from "passport";
import LocalStrategy from "passport-local";
LocalStrategy.Strategy;
import expressSession from "express-session";
import { session } from "./config/sessionConfig";

//Importacion de rutas
import rutaUsuarios from "./routes/usuario";

//iniacializaciones
const app = express();

//midleware
app.use(morgan("dev"));
app.use(json());
app.use(expressSession(session));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());
//routes
app.use("/api/usuarios", rutaUsuarios);

//config
passport.serializeUser((Usuario, done) => {
  done(null, Usuario);
});

passport.deserializeUser((Usuario, done) => {
  done(null, Usuario);
});

export default app;

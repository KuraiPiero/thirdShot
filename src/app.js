import express, { json } from "express";
import morgan from "morgan";
import db from "./models/usuario";
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
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(username, password, done) {
      const { email } = Usuario;
      User.findOne({ username: email }, function(err, Usuario) {
        if (err) {
          return done(err);
        }
        if (!Usuario) {
          return done(null, false, { message: "Incorrect username." });
        }
        if (!Usuario.validPassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }
        return done(null, Usuario);
      });
    }
  )
);
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

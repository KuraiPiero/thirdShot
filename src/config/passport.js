const LocalStrategy = require("passport-local").Strategy;
import Usuario from "../models/usuario";

module.exports = function(passport) {
  console.log("passport is working");
  passport.serializeUser(function(usuarios, done) {
    return done(null, usuarios.id_usuario);
    console.log("Serialize");
  });

  passport.deserializeUser(function(id_usuario, done) {
    console.log("DeSerialize");
    Usuario.findById(id_usuario).then(usuarios => {
      console.log(usuarios);
      return done(null, usuarios);
    });
  });

  passport.use(
    new LocalStrategy(function(username, password, done) {
      Usuario.findOne({ where: { email: username } })
        .then(function(usuarios) {
          if (!usuarios) {
            return done(null, false, { message: "Incorrect username." });
          }
          if (!usuarios.password === password) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, usuarios);
        })
        .catch(err => done(err));
    })
  );
};

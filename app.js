const bodyParser = require("body-parser");

const db = require("./db");

// Configuracion Inicial
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Puerto

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "Express is up!" });
});

//rutas de produccion
app.use("api/usuarios", require("./routes/usuario"));
// Listener del servidor

db.authenticate()
  .then(() => {})
  .catch(err => {
    console.log("Error" + err);
  });

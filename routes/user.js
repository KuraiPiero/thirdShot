const Usuario = require("../models/usuario");
const router = require("express").Router();

router.get("/usuarios", async (req, res) => {
  try {
    const Usuario = await usuarios.find();
    res.json(Usuario);
  } catch (err) {
    res.json({
      message: err
    });
  }
});
router.post("/registro", async (req, res, next) => {
  const Usuario = ({
    nombres,
    apellido,
    email,
    password,
    rol,
    celular,
    ciudad,
    direccion,
    fecha_creacion,
    ultima_sesion,
    estado
  } = req.body);
  console.log(Usuario);
  try {
    const UsuarioSave = await Usuario.save();
    res.json({
      UsuarioSave
    });
    console.log("Registrado En Libros");
  } catch (err) {
    res.json({
      message: err
    });
  }
});

module.exports = router;

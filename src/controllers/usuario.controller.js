import Usuario from "../models/usuario";

export async function crearUsuario(req, res) {
  const {
    nombre,
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
  } = req.body;
  try {
    let nuevoUsuario = await Usuario.create(
      {
        nombre,
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
      },
      {
        fields: [
          nombre,
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
        ]
      }
    );
    if (nuevoUsuario) {
      return res.json({ message: "Usuario registrado", data: nuevoUsuario });
    }
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "algunos parametros erroneos", data: {} });
  }
}

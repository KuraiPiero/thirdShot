import Usuario from "../models/usuario";

export async function encontrarUsuarios(req, res) {
    try {
        const usuarios = await Usuario.findAll()
        res.json({
            data: usuarios
        })
    } catch (error) {
        console.log(e);

    }
}

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
          "nombre",
          "apellido",
          "email",
          "password",
          "rol",
          "celular",
          "ciudad",
          "direccion",
          fecha_creacion, //error en formato
          ultima_sesion,
          "estado"
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

/*{
	  "nombre": "pepito",
    "apellido": "perez",
    "email": "dummy@gmail.com",
    "password": "123456",
    "rol": "1",
    "celular":"123456789",
    "ciudad":"medellin",
    "direccion":"dummy",
    "fecha_creacion":"{% now 'unix', '' %}",
    "ultima_sesion":"{% now 'iso-8601', '' %}",
    "estado":"1"
}*/

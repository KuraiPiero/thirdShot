import Usuario from "../models/usuario";
import jwt from "jsonwebtoken";

import { passport } from "../config/passport";

export async function encontrarUsuarios(req, res) {
  const usuarios = await Usuario.findAll();
  res.json({
    data: usuarios
  });
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
          "fecha_creacion", //error en formato
          "ultima_sesion",
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

export async function encontrarUnUsuario(req, res) {
  const { id } = req.params;

  const usuarios = await Usuario.findOne({ where: { id } });
  res.json(usuarios);
}

export async function eliminarUnUsuario(req, res) {
  const { id } = req.params;

  const eliminarFilaUsuario = await Usuario.destroy({ where: { id } });
  res.json({
    data: usuarios,
    message: `${usuarios.nombre} Eliminado`,
    count: eliminarFilaUsuario
  });
}

export async function autentificacionUsuario(req, res) {
  const { email } = req.params;
  Usuario.find({
    where: {
      username: email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(401).send({
          message: "‘Authentication failed.User not found.’"
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          var token = jwt.sign(
            JSON.parse(JSON.stringify(user)),
            "nodeauthsecret",
            { expiresIn: 86400 * 30 }
          );
          jwt.verify(token, "nodeauthsecret", function(err, data) {
            console.log(err, data);
          });
          res.json({ success: true, token: "JWT" + token });
        } else {
          res.status(401).send({
            success: false,
            msg: "‘Authentication failed.Wrong password.’"
          });
        }
      });
    })
    .catch(error => res.status(400).send(error));
}

import Usuario from "../models/usuario";
import jwt from "jsonwebtoken";
import passport from "passport";
import { passport } from "../config/passport";

getToken = function(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export async function encontrarPropiedad(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Propiedades.findAll()
      .then(products => res.status(200).send(propiedades))
      .catch(error => {
        res.status(400).send(error);
      });
  } else {
    return res.status(403).send({ success: false, msg: "‘Unauthorized.’" });
  }
}

export async function crearPropiedad(req, res) {
  const token = getToken(req.headers);
  const {
    titulo,
    descripcion,
    precio,
    sector,
    direccion,
    area,
    banios,
    img_principal,
    img_sec,
    habitaciones,
    cod_referencia,
    estado_disponible
  } = req.body;
  if (token) {
    await Propiedades.create({
      titulo,
      descripcion,
      precio,
      sector,
      direccion,
      area,
      banios,
      img_principal,
      img_sec,
      habitaciones,
      cod_referencia,
      estado_disponible
    })
      .then(Propiedades => res.status(201).send(Propiedades))
      .catch(error => res.status(400).send(error));
  } else {
    return res.status(403).send({ success: false, msg: "‘Unauthorized.’" });
  }
}

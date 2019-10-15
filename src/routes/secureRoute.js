import Usuario from "../models/usuario";
import jwt from "jsonwebtoken";
import passport from "passport";
import { passport } from "../config/passport";
import { Router } from "express";
import { passport } from "../config/passport";
import { Propiedades } from "../models/Propiedades";
import {
  encontrarPropiedad,
  crearPropiedad
} from "../controllers/propiedad.controller";
const router = Router();

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

router.get(
  "/propiedad",
  passport.authenticate("jwt", { session: false }),
  encontrarPropiedad
);
router.post(
  "/propiedades",
  passport.authenticate("jwt", { session: false }),
  crearPropiedad
);
export default router;

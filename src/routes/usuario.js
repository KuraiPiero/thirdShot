import { Router } from "express";
const router = Router();
import passport from "passport-local";
import {
  crearUsuario,
  encontrarUsuarios,
  encontrarUnUsuario,
  eliminarUnUsuario,
  autentificacionUsuario
} from "../controllers/usuario.controller";

router.get("/", encontrarUsuarios);
router.post("/signup", crearUsuario);
router.post("/login", autentificacionUsuario);
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

//encontrar por id
router.get("/:id", encontrarUnUsuario);
router.delete("/:id", eliminarUnUsuario);
export default router;

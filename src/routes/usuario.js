import { Router } from "express";
const router = Router();
import {
  crearUsuario,
  encontrarUsuarios,
  encontrarUnUsuario,
  eliminarUnUsuario,
  autentificacionUsuario
} from "../controllers/usuario.controller";

router.get("/", encontrarUsuarios);
router.post("/", crearUsuario);
router.post("/login", autentificacionUsuario);

//encontrar por id
router.get("/:id", encontrarUnUsuario);
router.delete("/:id", eliminarUnUsuario);
export default router;

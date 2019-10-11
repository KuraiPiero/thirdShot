import { Router } from "express";
const router = Router();
import { crearUsuario } from "../controllers/usuario.controller";

router.post("/", crearUsuario);

export default router;

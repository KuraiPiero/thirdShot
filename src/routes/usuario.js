import { Router } from "express";
const router = Router();
import { crearUsuario, encontrarUsuarios, encontrarUnUsuario, eliminarUnUsuario } from "../controllers/usuario.controller";

router.get('/', encontrarUsuarios)
router.post("/", crearUsuario);

//encontrar por id
router.get('/:id', encontrarUnUsuario)
router.delete('/:id', eliminarUnUsuario)
export default router;
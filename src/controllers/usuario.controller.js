import Usuario from "../models/usuario";


export async function encontrarUsuarios(req, res) {

    const usuarios = await Usuario.findAll()
    res.json({
        data: usuarios
    })

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
        let nuevoUsuario = await Usuario.create({
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
        }, {
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
        });
        if (nuevoUsuario) {
            return res.json({ message: "Usuario registrado", data: nuevoUsuario });
        }
    } catch (err) {
        console.log(err);

        res.status(500).json({ message: "algunos parametros erroneos", data: {} });
    }
}

export async function encontrarUnUsuario(req, res) {
    const { id } = req.params

    const usuarios = await Usuario.findOne({ where: { id } })
    res.json(usuarios)


}

export async function eliminarUnUsuario(req, res) {
    const { id } = req.params

    const eliminarFilaUsuario = await Usuario.destroy({ where: { id } })
    res.json({ data: usuarios, message: `${usuarios.nombre} Eliminado`, count: eliminarFilaUsuario })



}
import Sequelize from "sequelize";
import { sequelize } from "../database/db";
import verificationToken from "./verificationtoken";
const Usuario = sequelize.define(
    "usuarios", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING
        },
        rol: {
            type: Sequelize.INTEGER
        },
        celular: {
            type: Sequelize.STRING
        },
        ciudad: {
            type: Sequelize.STRING
        },
        direccion: {
            type: Sequelize.STRING
        },
        fecha_creacion: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        ultima_sesion: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        estado: {
            type: Sequelize.INTEGER("tiny"),
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: true
    }
);

Usuario.hasMany(verificationToken, {
    foreingKey: "usuario_id",
    sourceKey: "id"
});

verificationToken.belongsTo(Usuario, {
    foreingKey: "usuario_id",
    sourceKey: "id"
});

export default Usuario;
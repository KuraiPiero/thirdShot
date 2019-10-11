import Sequelize from "sequelize";
import { sequelize } from "../database/db";
import verificationToken from "./verificationtoken";
const Usuario = sequelize.define(
  "usuarios",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
  {
    classMethods: {
      associate: function(models) {
        User.hasOne(models.VerificationToken, {
          as: "verificationtoken",
          foreignKey: "usuario_id",
          foreignKeyConstraint: true
        });
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
      defaultValue: Sequelize.DATE
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
  },
  {
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

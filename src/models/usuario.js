import Sequelize from "sequelize";
import { sequelize } from "../database/db";
import bcrypt from "bcryptjs";
const Usuario = sequelize.define(
  "usuarios",
  {
    id_usuario: {
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
      defaultValue: Sequelize.NOW
    },
    ultima_sesion: {
      type: Sequelize.DATE
    },
    estado: {
      type: Sequelize.INTEGER("tiny"),
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    timestamps: false
  }
);

Usuario.prototype.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password

Usuario.beforeCreate(Usuario => {
  Usuario.password = bcrypt.hashSync(
    Usuario.password,
    bcrypt.genSaltSync(10),
    null
  );
});
export default Usuario;

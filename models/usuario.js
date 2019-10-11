"use strict";
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      nombres: DataTypes.STRING,
      apellido: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      rol: DataTypes.INTEGER,
      celular: DataTypes.STRING,
      ciudad: DataTypes.STRING,
      direccion: DataTypes.STRING,
      fecha_creacion: DataTypes.DATE,
      ultima_sesion: DataTypes.DATE,
      estado: DataTypes.INTEGER
    },
    {}
  );
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};

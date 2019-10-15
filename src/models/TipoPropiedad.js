import Sequelize from "sequelize";
import { sequelize } from "../database/db";

const TipoPropiedad = sequelize.define("tipo_propiedad", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
});

module.exports = TipoPropiedad;

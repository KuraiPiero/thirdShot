import Usuario from "./usuario";
import Sequelize from "sequelize";
import { sequelize } from "../database/db";
import Propiedades from "./Propiedades";
const adminPropiedades = sequelize.define(
  "admin_propiedades",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fecha_in: {
      type: Sequelize.DATE
    },
    fecha_out: Sequelize.DATE,
    valor: Sequelize.DOUBLE(8, 2)
  },
  { underscored: true }
);

export default adminPropiedades;

adminPropiedades.belongsTo(Propiedades);
adminPropiedades.belongsTo(Usuario);

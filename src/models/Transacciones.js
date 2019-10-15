import Sequelize from "sequelize";
import { sequelize } from "../database/db";
import Propiedades from "./Propiedades";
const Transacciones = sequelize.define(
  "transacciones",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_transaccion: {
      type: Sequelize.INTEGER
    },
    valor: {
      type: Sequelize.DOUBLE(8, 2)
    },
    estado_transaccion: Sequelize.INTEGER
  },
  { underscored: true }
);

Transacciones.belongsTo(Propiedades);

export default Transacciones;

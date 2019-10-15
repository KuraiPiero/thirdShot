import Sequelize from "sequelize";
import { sequelize } from "../database/db";

const Roles = sequelize.define("roles", {
  id: {
    type: Sequelize.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
});

module.exports = Roles;

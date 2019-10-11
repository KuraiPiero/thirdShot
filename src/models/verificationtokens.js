import Sequelize from "sequelize";
import { sequelize } from "../database/db";

const verificationToken = sequelize.define("verificationtokens", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  usuario_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    onUpdate: "cascade",
    onDelete: "cascade",
    references: { model: "usuarios", key: "id" }
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

export default verificationToken;

import Sequelize from "sequelize";
require("dotenv").config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOSTNAME,
    dialect: "mariadb",
    dialectOptions: {
      collate: "utf8mb4_general_ci",
      useUTC: false,
      timezone: "Etc/GMT-5"
    },
    pool: {
      min: 0,
      max: 2,
      idle: 10000
    },
    define: {
      timestamps: true
    },
    benchmark: false,
    logging: false
  }
);

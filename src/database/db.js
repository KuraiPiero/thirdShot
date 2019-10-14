import Sequelize from "sequelize";
require("dotenv").config();

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
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
      timestamps: false
    },
    benchmark: false,
    logging: false
  }
);

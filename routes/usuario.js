const router = require("express").Router();
const db = require("../db");
const models = require("../models/");
const Sequelize = require("sequelize");

models.Usuario.getAll = function() {
  return models.Usuario.findAll({ raw: true });
};

router.get("/usuarios", function(req, res, next) {
  models.Usuario.getAll({ raw: true })
    .then(usuarios => {
      console.log(usuarios);
      res.sendStatus(200);
    })
    .catch(function(err) {
      // your error handling code here;
    });
});

module.exports = router;

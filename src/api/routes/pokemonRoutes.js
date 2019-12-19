"use strict";

module.exports = function(app) {
  var controller = require("../controllers/pokemonController");

  app.route("/status").get(controller.status);
};

"use strict";

module.exports = function(app) {
  var controller = require("../controllers/defaultController");

  app.route("/status").get(controller.status);
};

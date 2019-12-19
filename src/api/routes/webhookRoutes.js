"use strict";

module.exports = function(app) {
  var controller = require("../controllers/webhookController");

  app.route("/dialog").post(controller.handler);
};

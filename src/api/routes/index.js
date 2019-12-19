"use strict";

module.exports = function(app) {
  // Import controller routes here
  var pokemonRoutes = require("./pokemonRoutes");
  var webhookRoutes = require("./webhookRoutes");

  // Execute the routes here
  pokemonRoutes(app);
  webhookRoutes(app);
};

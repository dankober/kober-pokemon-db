"use strict";

module.exports = function(app) {
  // Import controller routes here
  var pokemonRoutes = require("./pokemonRoutes");

  // Execute the routes here
  pokemonRoutes(app);
};

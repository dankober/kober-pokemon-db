"use strict";

exports.intent = function(agent) {
  agent.add("We're in the Pokemon Type intent: " + agent.parameters["Pokemon"]);
};

"use strict";

const { WebhookClient } = require("dialogflow-fulfillment");

exports.handler = function(req, res) {
  const agent = new WebhookClient({ request: req, response: res });

  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", function(agent) {
    agent.add("Welcome to Express webhook things!");
  });

  agent.handleRequest(intentMap);
};

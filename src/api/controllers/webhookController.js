"use strict";

const { WebhookClient } = require("dialogflow-fulfillment");

// Import intents
const defaultWelcome = require("./intents/defaultWelcomeIntent");

exports.handler = function(req, res) {
  const agent = new WebhookClient({ request: req, response: res });

  console.log("Request Body:" + JSON.stringify(req.body));

  let intentMap = new Map();

  // Set intents
  intentMap.set(
    "Default Welcome Intent",
    defaultWelcome.intent(agent, req, res)
  );

  agent.handleRequest(intentMap);
};

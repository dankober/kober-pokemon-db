"use strict";

const { WebhookClient } = require("dialogflow-fulfillment");

// Import intents
const defaultWelcome = require("./intents/defaultWelcomeIntent");
const pokemonType = require("./intents/pokemonTypeIntent");
const pokemonResistance = require("./intents/pokemonResistanceIntent");

exports.handler = function(req, res) {
  const agent = new WebhookClient({ request: req, response: res });

  console.log("Request Body:" + JSON.stringify(req.body));

  let intentMap = new Map();

  // Set intents
  intentMap.set("Default Welcome Intent", defaultWelcome.intent);
  intentMap.set("pokemon.type", pokemonType.intent);
  intentMap.set("pokemon.resistance", pokemonResistance.intent);

  agent.handleRequest(intentMap);
};

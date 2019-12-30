"use strict";

const typeList = require("../../../data/types");
const listMaker = require("../../../utils/listMaker");

exports.intent = function(agent) {
  var firstType = agent.parameters["Type1"];
  var secondType = agent.parameters["Type2"];
  const resistance = agent.parameters["Resistance"];

  if (!firstType) {
    agent.add("You didn't provide a valid Pokemon type");
    return;
  }

  firstType = typeList.types.find(
    t => t.Name.toUpperCase() === firstType.toUpperCase()
  );
  if (!firstType) {
    agent.add("I don't have any information about that type");
    return;
  }

  if (!resistance) {
    const strengths = listMaker.listMaker(firstType.StrongAgainst);
    const weaknesses = listMaker.listMaker(firstType.WeakAgainst);

    agent.add(`${firstType.Name} is strong against ${strengths}.`);
    agent.add(`It is weak against ${weaknesses}.`);
    return;
  }

  agent.add("Working on it...");
};

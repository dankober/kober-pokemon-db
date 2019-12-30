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
    if (firstType.StrongAgainst) {
      const strengths = listMaker.listMaker(firstType.StrongAgainst);
      agent.add(`${firstType.Name} is strong against ${strengths}.`);
    } else {
      agent.add(`${firstType.Name} isn't strong against anything.`);
    }

    if (firstType.WeakAgainst) {
      const weaknesses = listMaker.listMaker(firstType.WeakAgainst);
      agent.add(`It is weak against ${weaknesses}.`);
    } else {
      agent.add(`It isn't weak against anything`);
    }

    return;
  }

  agent.add("Working on it...");
};

"use strict";

const typeList = require("../../../data/types");
const listMaker = require("../../../utils/listMaker");

exports.intent = function(agent) {
  var firstType = agent.parameters["Type1"];
  var secondType = agent.parameters["Type2"];
  const resistance =
    agent.parameters["Resistance"] &&
    agent.parameters["Resistance"].toUpperCase();

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

  const addStrong = function() {
    if (firstType.StrongAgainst) {
      const strengths = listMaker.listMaker(firstType.StrongAgainst);
      agent.add(`${firstType.Name} is strong against ${strengths}.`);
    } else {
      agent.add(`${firstType.Name} isn't strong against anything.`);
    }
  };

  const addWeak = function() {
    if (firstType.WeakAgainst) {
      const weaknesses = listMaker.listMaker(firstType.WeakAgainst);
      agent.add(`It is weak against ${weaknesses}.`);
    } else {
      agent.add(`It isn't weak against anything`);
    }
  };

  if (!resistance) {
    addStrong();
    addWeak();
  } else {
    if (secondType) {
      secondType = typeList.types.find(
        t => t.Name.toUpperCase() === secondType.toUpperCase()
      );
    }

    if (!secondType) {
      switch (resistance) {
        case "STRONG":
          addStrong();
          break;
        case "WEAK":
          addWeak();
          break;
      }
    } else {
      const matched =
        resistance === "STRONG"
          ? firstType.StrongAgainst.find(t => t === secondType.Name)
          : firstType.WeakAgainst.find(t => t === secondType.Name);

      if (matched) {
        agent.add("Yes, it is");
      } else {
        agent.add("No, it is not");
      }
    }
  }
};

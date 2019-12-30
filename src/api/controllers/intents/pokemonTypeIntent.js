"use strict";

const pokemonList = require("../../../data/pokemon");
const listMaker = require("../../../utils/listMaker");
const resistanceIntent = require("./pokemonResistanceIntent");

exports.intent = function(agent) {
  const searchPokemon = agent.parameters["Pokemon"];
  const searchType = agent.parameters["Type"];

  if (!searchPokemon) {
    agent.add("You didn't provide a Pokemon name");
    return;
  }

  const results = pokemonList.pokemon.filter(
    p => p.Name.toUpperCase() === searchPokemon.toUpperCase()
  );
  if (results.length === 0) {
    agent.add("I don't have any information about that Pokemon");
    return;
  }

  const foundPokemon = results[0];
  const types = listMaker.listMaker(foundPokemon.Type);
  const answer = `${foundPokemon.Name} is a ${types} type`;

  if (!searchType) {
    agent.add(answer);
  } else {
    if (
      foundPokemon.Type.filter(t => t.toUpperCase() === searchType.toUpperCase()).length > 0
    ) {
      agent.add(`Yes, ${answer}`);
    } else {
      agent.add(`No, ${answer}`);
    }
  }
  
  foundPokemon.Type.forEach(element => {
    agent.parameters["Type1"] = element;  
    resistanceIntent.intent(agent);
  });

  
};

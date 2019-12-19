"use strict";

const pokemonList = require("../../../data/pokemon");

exports.intent = function(agent) {
  const pokemon = agent.parameters["Pokemon"];
  if (!pokemon) {
    agent.add("You didn't provide a Pokemon name");
    return;
  }

  const results = pokemonList.pokemon.filter(
    p => p.Name.toUpperCase() === pokemon.toUpperCase()
  );
  if (results.length === 0) {
    agent.add("I don't have any information about that Pokemon");
    return;
  }

  const foundPokemon = results[0];
  const types =
    foundPokemon.Type.length === 1
      ? foundPokemon.Type[0]
      : `${foundPokemon.Type[0]} and ${foundPokemon.Type[1]}`;

  agent.add(`${pokemon} is a ${types} type`);
};

exports.pokemon = [
  {
    Name: "Bulbasaur",
    Type: ["Grass"],
    EvolvesTo: "Ivysaur"
  },
  {
    Name: "Ivysaur",
    Type: ["Grass"],
    EvolvesFrom: "Bulbasaur",
    EvolvesTo: "Venusaur"
  },
  {
    Name: "Venusaur",
    Type: ["Grass"],
    EvolvesFrom: "Ivysaur"
  },
  { Name: "Pikachu", Type: ["Electric"] },
  { Name: "Snorlax", Type: ["Normal"] },
  { Name: "Charmander", Type: ["Fire"] },
  { Name: "Oddish", Type: ["Grass", "Poison"], EvolvesTo: "Gloom" },
  {
    Name: "Gloom",
    Type: ["Grass", "Poison"],
    EvolvesFrom: "Oddish",
    EvolvesTo: "Vileplume"
  },
  { Name: "Vileplume", Type: ["Grass", "Poison"], EvolvesFrom: "Gloom" },
  { Name: "Pinsir", Type: ["Normal", "Bug"]}
];

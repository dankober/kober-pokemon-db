exports.types = [
  {
    Name: "Normal",
    WeakAgainst: ["Fighting"]
  },
  {
    Name: "Grass",
    StrongAgainst: ["Water", "Ground", "Rock"],
    WeakAgainst: ["Fire", "Ice", "Poison", "Flying", "Bug"]
  },
  {
    Name: "Water",
    StrongAgainst: ["Fire", "Ground", "Rock"],
    WeakAgainst: ["Grass", "Electric"]
  },
  {
    Name: "Fire",
    StrongAgainst: ["Grass", "Ice", "Bug", "Steel"],
    WeakAgainst: ["Water", "Ground", "Rock"]
  },
  {
    Name: "Electric",
    StrongAgainst: ["Water", "Flying"],
    WeakAgainst: ["Ground"]
  },
  {
    Name: "Ice",
    StrongAgainst: ["Grass", "Ground", "Flying", "Dragon"],
    WeakAgainst: ["Fire", "Fighting", "Rock", "Steel"]
  },
  {
    Name: "Fighting",
    StrongAgainst: ["Normal", "Ice", "Rock", "Dark", "Steel"],
    WeakAgainst: ["Flying", "Psychic", "Fairy"]
  },
  {
    Name: "Poison",
    StrongAgainst: ["Grass", "Fairy"],
    WeakAgainst: ["Ground", "Psychic"]
  },
  {
    Name: "Ground",
    StrongAgainst: ["Fire", "Electric", "Poison", "Rock"],
    WeakAgainst: ["Water", "Grass", "Ice"]
  }
];

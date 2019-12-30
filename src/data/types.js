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
  }
];

// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in act of combat`;
    }
  }
}

function randomize() {
  let randomN = Math.floor(Math.random() * 100);

  while (randomN === 0) {
    randomN = Math.floor(Math.random() * 100);
  }

  return randomN;
}

let samy = new Viking('Samy', 200, 10);
console.log(samy.health);
console.log(
  `${samy.name} has ${samy.health} points of health and ${samy.strength} points of strength`
);
//console.log(samy.receiveDamage(randomNumber))
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((turn) => {
  if (samy.health > 0) console.log(samy.receiveDamage(randomize()));
});

let klaus = new Saxon('Klaus', 200, 10);
console.log(klaus.health);
console.log(
  `Klaus has ${klaus.health} points of health and ${klaus.strength} points of strength`
);
//console.log(klaus.receiveDamage(randomNumber1));

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((turn) => {
  if (klaus.health > 0) console.log(klaus.receiveDamage(randomize()));
});

// War
class War {
  constructor() {
    this.vikinsArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikinsArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const vikingIndex = Math.floor(Math.random() * this.vikingsArmy.length);
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomViking = this.vikingsArmy[vikingIndex];
    const randomSaxon = this.saxonArmy[saxonIndex];

    randomSaxon.receiveDamage(random.vikingAttack());
    //this.randomSaxon.pop();
    if (this.saxonArmy.health <= 0) this.saxonArmy.splice(saxonIndex, 1);
    return damage;
  }
  saxonAttack() {
    const vikingIndex = Math.floor(Math.random() * this.vikingsArmy.length);
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);

    const randomViking = this.vikingsArmy[vikingIndex];
    const randomSaxon = this.saxonArmy[saxonIndex];

    randomSaxon.receiveDamage(random.vikingAttack());
    //this.randomViking.pop();
    if (randomViking.health <= 0) this.vikingsArmy.splice(vikingIndex, 1);
    return damage;
  }

  showStatus() {
    if (saxonArmy.length === 0)
      return 'Vikings have won the war of the century!';
    else if (vikingArmy.length === 0)
      return 'Saxons have fought for their lives and survived another day...';
    else return 'Vikings and Saxons are still in the thick of battle.';
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
// if (typeof module !== 'undefined') {
//   module.exports = { Soldier, Viking, Saxon, War };
// }

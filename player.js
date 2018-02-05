/** Player Object & Functions **/
const Item = require('./item.js');
module.exports = class Player {

  // Constructor for Player
  constructor(id, health, position, offensive, defensive, name, status) {
    this.id = id; // 0 - (# of players - 1)
    this.health = health; // Integer
    this.position = position; // Integer, 1-(boardwidth^2)
    this.offensive = offensive; // List of item objects
    this.defensive = defensive; // List of item objects
    this.name = name;  // String name
    this.status = status;
  }

  // Damage the player's health by the amount.
  damageHealthBy(amount) {
    if (typeof(amount) != 'number') { return; }
    if (amount % 1 !== 0 || amount < 0) { return; }

    if (this.health - amount < 0) {
      this.health = 0;
    } else if (this.health > 0) {
      this.health -= amount;
    } else {
      this.health = 0;
    }
  }
  // Heals the player's health by the amount.
  healHealthBy(amount) {
    if (typeof(amount) != 'number') { return; }
    if (amount % 1 !== 0 || amount < 0) { return; }

    if (this.health <= 0) {
      this.health = 0;
    } else if (this.health + amount <= 100) {
      this.health += amount;
    } else {
      this.health = 100;
    }
  }

  // Change the player's position
  newPosition(position) {
    this.position = position;
  }

  // Push an offensive item to player's inventory
  pushOffensiveItem(offensiveItem) {
    if (offensiveItem instanceof Item) {
      if (this.offensive == null) { this.offensive = []; }
      if (this.offensive.length < 6) {
        this.offensive.push(offensiveItem);
      }
    }
  }

  // Push a defensive item to player's inventory
  pushDefensiveItem(defensiveItem) {
    if (defensiveItem instanceof Item) {
      if (this.defensive == null) { this.defensive = []; }
      if (this.defensive.length < 6) {
        this.defensive.push(defensiveItem);
      }
    }
  }

  // Pop an offensiveItem from the player's inventory
  popOffensiveItem() {
    if (this.offensive.length == 0) {
      return null;
    }
    return this.offensive.pop();
  }

  // Pop a defensiveItem from the player's inventory
  popDefensiveItem() {
    if (this.defensive.length == 0) {
      return null;
    }
    return this.defensive.pop();
  }

  // Get player health
  getHealth() {
    return this.health;
  }
}

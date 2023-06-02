import Inventory from "./Classes/Inventory";
import Item from "./Classes/Item";
import ItemEffect from "./Classes/ItemEffect";
import Cooldown from "./Classes/Cooldown";
import Trash from "./Classes/Trash";

import fs from "fs";

class User {
  name: string;
  id: number;
  inventory: Inventory;

  constructor(name: string, id: number, inventory: Inventory) {
    this.name = name;
    this.id = id;
    this.inventory = inventory;
  }
}

let sword: Item = new Item({
  name: "Sword of a thousand Truths",
  id: 1,
  rarity: "Legendary",
  usage: { max: 5, current: 0 } satisfies Cooldown | Trash,
  effect: {
    category: "damage",
    type: "multiplicative",
    target: "self",
    modifier: 0.1,
    text: "+10% Physical Damage",
  } satisfies ItemEffect,
});

let potion: Item = new Item({
  name: "Strong Potion of Health",
  id: 2,
  rarity: "Rare",
  usage: { max: 2, current: 0 } satisfies Cooldown | Trash,
  effect: {
    category: "healing",
    type: "multiplicative",
    target: "self",
    modifier: 0.2,
    text: "Heals 20% of max health",
  } satisfies ItemEffect,
});

let bow: Item = new Item({
  name: "Bow of the Forest",
  id: 3,
  rarity: "Epic",
  usage: { max: 3, current: 0 } satisfies Cooldown | Trash,
  effect: {
    category: "attackspeed",
    type: "multiplicative",
    target: "self",
    modifier: 0.1,
    text: "+10% Attackspeed",
  } satisfies ItemEffect,
});

/* -------------------- Testing -------------------- */
const inv: Inventory = new Inventory([sword, potion]);
inv.addItem(bow);

// console.log(inv.getActiveItem());
// console.log(inv.getItems());

const bowItem: Item | undefined = inv.findById(3);
if (bowItem) {
  // let used: boolean = bowItem.use();
  // console.log(used ? "Bow Was Used." : "Bow Was not Used.");
  inv.setActiveItem(bowItem);
}

// console.log(inv.getActiveItem());

let user: User = new User("username", 261266, inv);
fs.writeFileSync("./data.json", JSON.stringify(user, null, "\t"));

let obj = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
let inventory = new Inventory().fromJSON(obj.inventory);

const item = inventory.findById(3);
if (item) {
  console.log("Item was found");
  // let wasUsed = item.use();
  // if (!wasUsed) console.log("Item is on cooldown");
} else {
  console.log("Item was not found");
}

let foundSword: Item | undefined = inv.findByCode("bz#0001");
if (foundSword) {
  console.log("Sword was found");
  // let wasUsed: boolean = foundSword.use();
  // if (wasUsed) inv.setActiveItem(foundSword);
} else {
  console.log("Sword was not found");
}

// console.log(inv);

inv.addItem(sword);
foundSword = inv.findByCode("bz#0001");
// console.log(foundSword);
console.log(inv);

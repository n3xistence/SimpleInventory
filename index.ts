import Inventory from "./Classes/Inventory";
import Item from "./Classes/Item";
import ItemEffect from "./Classes/ItemEffect";
import Integer from "./Classes/Integer";

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
  code: new Integer(1).toBase36(),
  rarity: "Legendary",
  cooldown: { max: 5, current: 0 },
  effect: {
    category: "damage",
    type: "multiplicative",
    modifier: 0.1,
    text: "+10% Physical Damage",
  } satisfies ItemEffect,
});

let potion: Item = new Item({
  name: "Strong Potion of Health",
  id: 2,
  code: `bz#${new Integer(2).toBase36()}`,
  rarity: "Rare",
  cooldown: { max: 2, current: 0 },
  effect: {
    category: "healing",
    type: "multiplicative",
    modifier: 0.2,
    text: "Heals 20% of max health",
  } satisfies ItemEffect,
});

let bow: Item = new Item({
  name: "Bow of the Forest",
  id: 3,
  code: `bz#${new Integer(3).toBase36()}`,
  rarity: "Epic",
  cooldown: { max: 3, current: 0 },
  effect: {
    category: "attackspeed",
    type: "multiplicative",
    modifier: 0.1,
    text: "+10% Attackspeed",
  } satisfies ItemEffect,
});

const inv: Inventory = new Inventory([sword, potion]);
inv.addItem(bow);

const bowItem: Item | undefined = inv.findById(3);
if (bowItem) {
  let used: boolean = bowItem.use();
  console.log(used ? "Bow Was Used." : "Bow Was not Used.");
}

let user: User = new User("username", 261266, inv);
fs.writeFileSync("./data.json", JSON.stringify(user, null, "\t"));

let obj = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
let inventory = new Inventory().fromJSON(obj.inventory);

const item = inventory.findById(3);
if (item) {
  console.log(item ? "Item found" : "Item not found");
  let wasUsed = item.use();
  if (wasUsed) console.log("Item was used");
  else console.log("Item is on cooldown.");
} else {
  console.log("Item was not found");
}

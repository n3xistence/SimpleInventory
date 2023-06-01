import Inventory from "./Classes/Inventory";
import Item from "./Classes/Item";
import ItemEffect from "./Classes/ItemEffect";
import Integer from "./Classes/Integer";

let sword: Item = new Item({
  name: "Sword of a thousand Truths",
  id: 1,
  code: new Integer(1).toBase36(),
  rarity: "Legendary",
  cooldown: 5,
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
  cooldown: 2,
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
  cooldown: 3,
  effect: {
    category: "attackspeed",
    type: "multiplicative",
    modifier: 0.1,
    text: "+10% Attackspeed",
  } satisfies ItemEffect,
});

const inv: Inventory = new Inventory([sword, potion]);
inv.addItem(bow);

// let found: Item | undefined = inv.findByName("Sword of a hundred Truths");
// if (!found) console.log("Correct");
// else console.log("Incorrect");

// found = inv.findByName("Sword of a thousand Truths");
// if (found) console.log("Correct");
// else console.log("Incorrect");

const bowItem: Item | undefined = inv.findById(3);
if (bowItem) {
  let used: boolean = bowItem.use();
  console.log(used);
}

console.log(inv.getItems());

inv.moveTurn();

console.log(inv.getItems());

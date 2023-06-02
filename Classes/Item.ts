import ItemEffect from "./ItemEffect";
import Integer from "./Integer";
import Cooldown from "./Cooldown";
import Trash from "./Trash";

interface ItemProps {
  name: string;
  id: number;
  amount?: number;
  rarity: string;
  usage: Cooldown | Trash;
  effect: ItemEffect;
}

class Item {
  name: string;
  id: number;
  code: string;
  rarity: string;
  amount: number = 1;
  usage: Cooldown | Trash;
  effect: ItemEffect;

  // might remove code from props and generate it when the class is invoked -> need to import Integer
  constructor(props: ItemProps) {
    const { name, id, rarity, usage, effect } = props;

    this.name = name;
    this.id = id;
    this.code = `bz#${new Integer(id).toBase36()}`;
    this.rarity = rarity;
    this.usage = usage;
    this.effect = effect;
  }

  // use(): boolean {
  //   this.cooldown.current = this.cooldown.max;
  //   return true;
  // }

  // turn(): void {
  //   if (this.cooldown.current === 0) return;

  //   this.cooldown.current -= 1;
  // }
}

export default Item;

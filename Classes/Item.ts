import ItemEffect from "./ItemEffect";
import Integer from "./Integer";

/*
 *   Items are unique so we do not need an amount
 */
interface Cooldown {
  current: number;
  max: number;
}

interface ItemProps {
  name: string;
  id: number;
  rarity: string;
  cooldown: Cooldown;
  effect: ItemEffect;
}

class Item {
  name: string;
  id: number;
  code: string;
  rarity: string;
  cooldown: Cooldown;
  effect: ItemEffect;

  // might remove code from props and generate it when the class is invoked -> need to import Integer
  constructor(props: ItemProps) {
    const { name, id, rarity, cooldown, effect } = props;

    this.name = name;
    this.id = id;
    this.code = `bz#${new Integer(id).toBase36()}`;
    this.rarity = rarity;
    this.cooldown = cooldown;
    this.effect = effect;
  }

  use(): boolean {
    if (this.cooldown.current > 0) return false;

    this.cooldown.current = this.cooldown.max;
    return true;
  }

  turn(): void {
    if (this.cooldown.current === 0) return;

    this.cooldown.current -= 1;
  }
}

export default Item;

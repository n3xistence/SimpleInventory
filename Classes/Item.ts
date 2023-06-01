import ItemEffect from "./ItemEffect";

/*
 *   Items are unique so we do not need an amount
 */
interface ItemProps {
  name: string;
  id: number;
  code: string;
  rarity: string;
  cooldown: number;
  effect: ItemEffect;
}

interface Cooldown {
  current: number;
  max: number;
}

class Item {
  name: string;
  id: number;
  code: string;
  rarity: string;
  cooldown: Cooldown = { current: 0, max: 0 };
  effect: ItemEffect;

  constructor(props: ItemProps) {
    const { name, id, code, rarity, cooldown, effect } = props;

    this.name = name;
    this.id = id;
    this.code = code;
    this.rarity = rarity;
    this.cooldown.max = cooldown;
    this.effect = effect;
  }

  use(): boolean {
    if (this.cooldown.current > 0) return false;

    this.cooldown.current = this.cooldown.max;
    return true;
  }

  turn(): void {
    if (this.cooldown.current === 0) return;

    this.cooldown.current = this.cooldown.current - 1;
  }
}

export default Item;

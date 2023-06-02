import Item from "./Item";

class Inventory {
  private activeItem: Item | undefined;
  private list: Item[];

  constructor(list: Item[] = []) {
    this.list = list;
  }

  getItems(): Item[] {
    return this.list;
  }

  getActiveItem(): Item | undefined {
    return this.activeItem;
  }

  // we can use .find() since id, name and code will all be unique
  findByName(name: string): Item | undefined {
    return this.list.find((e) => e.name === name);
  }

  findById(id: number): Item | undefined {
    return this.list.find((e) => e.id === id);
  }

  findByCode(code: string): Item | undefined {
    return this.list.find((e) => e.code === code);
  }

  addItem(item: Item): void {
    if (this.activeItem && this.activeItem.id === item.id) {
      this.activeItem.amount += 1;
      return;
    }

    let found: Item | undefined = this.findById(item.id);
    if (found) found.amount += 1;
    else this.list.push(item);
  }

  removeItem(item: Item): void {
    if (this.activeItem && this.activeItem.id === item.id) {
      this.activeItem.amount -= 1;
      return;
    }

    let found: Item | undefined = this.findById(item.id);
    if (found) found.amount += 1;
    else this.list.push(item);
  }

  moveTurn(): void {
    for (let item of this.list) {
      // item.turn();
    }
  }

  setActiveItem(item: Item): void {
    const itemIndex: number = this.list.findIndex((e) => e.id === item.id);
    if (itemIndex === -1) throw Error("No Such Item");

    this.list.splice(itemIndex, 1);
    this.activeItem = item;
  }

  fromJSON(json: string | object): Inventory {
    const data = typeof json === "string" ? JSON.parse(json) : json;
    const inventory = new Inventory();
    Object.assign(inventory, data);

    const items: Item[] = [];
    for (let item of inventory.getItems()) {
      const iData = typeof item === "string" ? JSON.parse(item) : item;

      items.push(new Item(iData));
    }
    Object.assign(inventory.list, items);

    return inventory;
  }
}

export default Inventory;

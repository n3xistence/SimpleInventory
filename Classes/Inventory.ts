import Item from "./Item";

class Inventory {
  private list: Item[];

  constructor(list: Item[] = []) {
    this.list = list;
  }

  getItems(): Item[] {
    return this.list;
  }

  // we can use .find() since both name and id will be unique
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
    this.list.push(item);
  }

  moveTurn(): void {
    for (let item of this.list) {
      item.turn();
    }
  }
}

export default Inventory;

class Integer {
  private value: number;

  constructor(n: number = 0) {
    this.value = n;
  }

  setValue(n: number): void {
    this.value = n;
  }

  valueOf(): number {
    return this.value;
  }

  private compare(n: number): number {
    if (n === this.value) return 0;
    if (n < this.value) return -1;
    return 1;
  }

  toBase36(): string {
    let decimal = this.value;
    let base36 = "";
    while (decimal > 0) {
      const remainder = decimal % 36;
      decimal = Math.floor(decimal / 36);
      base36 = remainder.toString(36) + base36;
    }
    return base36.toUpperCase().padStart(4, "0");
  }

  greaterThan(n: number): boolean {
    return this.compare(n) === 1;
  }

  lessThan(n: number): boolean {
    return this.compare(n) === -1;
  }

  equals(n: number): boolean {
    return this.compare(n) === 0;
  }
}

export default Integer;

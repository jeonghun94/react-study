interface IStorage<T> {
  [key: string]: T;
}

abstract class ALocalStorage<T> {
  constructor() {
    this.storage = {};
  }
  storage: IStorage<T>;
  abstract setItem(key: string, val: T): void;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class LocalStorage extends ALocalStorage<string> {
  constructor() {
    super();
  }
  getItem(key: string) {
    return this.storage[key];
  }
  setItem(key: string, value: string) {
    this.storage[key] = value;
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const storage = new LocalStorage();
storage.setItem("kimchi", "very good");
storage.setItem("potato", "so so");
console.log(storage);
storage.clearItem("potato");
console.log(storage);
console.log(storage.getItem("kimchi"));
console.log(storage);
storage.clear();
console.log(storage);

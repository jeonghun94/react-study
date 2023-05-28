interface IStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storge: IStorage<T> = {};

  setItem(key: string, item: T) {
    this.storge[key] = item;
  }

  getItem(key: string) {
    return this.storge[key];
  }

  clearItem(key: string) {
    if (this.storge[key]) {
      delete this.storge[key];
    }
  }

  clear() {
    this.storge = {};
  }
}

const storage = new LocalStorage<string>();
storage.setItem("kimchi", "very good");
storage.setItem("potato", "so so");
console.log(storage);
storage.clearItem("potato");
console.log(storage);
console.log(storage.getItem("kimchi"));
console.log(storage);
storage.clear();
console.log(storage);

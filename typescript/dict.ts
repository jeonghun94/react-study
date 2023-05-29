type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words = {};
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  get() {
    return this.words;
  }

  delete(word: Word) {
    if (this.words[word.term]) {
      delete this.words[word.term];
    }
  }

  update(word: Word) {
    if (this.words[word.term]) {
      this.words[word.term] = word.def;
    }
  }

  showAll() {
    let keys: string = "";
    Object.keys(this.words).forEach((key) => {
      keys += `${key}, `;
    });
    return keys;
  }

  count() {
    return Object.keys(this.words).length;
  }

  exists(key: string): boolean {
    return this.words[key] ? true : false;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "very good");
const potato = new Word("potato", "fried");
const potato2 = new Word("potato", "wash");
const dict = new Dict();

dict.add(kimchi);
dict.add(potato);
console.log(dict.get());
dict.delete(kimchi);
console.log(dict.get());
dict.update(potato2);
console.log(dict.get());
const pizza = new Word("pizza", "nice");
dict.add(pizza);
console.log(dict.showAll());
console.log(dict.count());
console.log(dict.exists("pizza"));
console.log(dict.exists("water"));

// Interface - Fundamentals
// only allows to create blueprint for objects

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // mehtod
  getAuthor(): string;
  getTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self Help",
  getAuthor() {
    return this.author;
  },
  getTitle(message) {
    return `${this.title} and ${message.toUpperCase()}`;
  },
  // 1st option
  // printSomething: function (someValue) {
  //   return someValue;
  // },
  // 2nd option
  // printSomething: (someValue) => {
  //   console.log(deepWork.title);
  //   return someValue;
  // },
  // 3rd option
  printSomething(someValue) {
    return someValue;
  },
};

console.log(deepWork.getAuthor());
console.log(deepWork.printSomething(1));

// Challenge

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;

  upgradeRam(extra: number): number;
}

const dellG5: Computer = {
  id: 2123,
  brand: "Dell",
  ram: 16,
  upgradeRam(extra) {
    this.ram += extra;
    return this.ram;
  },
};

console.log(dellG5.upgradeRam(16));

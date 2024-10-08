// Functions

function sayHi(name: string) {
  return `Hi there! ${name.toUpperCase()}`;
}

console.log(sayHi("Pratik"));

function calculateDiscount(price: number): number {
  return price * 0.9;
}
const finalPrice = calculateDiscount(300);

console.log(finalPrice);

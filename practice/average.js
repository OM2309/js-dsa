const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 },
];

let total = 0;
products.forEach((item) => (total = total + item.price));

let avg = total / products.length;

console.log(avg);

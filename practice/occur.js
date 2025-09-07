const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let fruitOccur = {};

for (let i = 0; i < fruits.length; i++) {
  if (!fruitOccur.hasOwnProperty(fruits[i])) {
    fruitOccur[fruits[i]] = 1;
  } else {
    fruitOccur[fruits[i]]++;
  }
}

console.log(fruitOccur);

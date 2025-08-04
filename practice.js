const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "Diana", age: 28 },
];

// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     people[i].isAdult = true;
//   }
// }

// console.log(people);

// const newObj = people.map((item) => {
//   return {
//     ...item,
//     isAdult: item.age >= 18,
//   };
// });

// console.log(newObj);

const newObj = people.map((item) => {
  item.isAdult = item.age >= 18;
  return item;
});

console.log(newObj);

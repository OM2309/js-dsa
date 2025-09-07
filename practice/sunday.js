const users = [
  { name: "Anurag", age: 21 },
  { name: "Riya", age: 25 },
  { name: "Amit", age: 19 },
  { name: "Amit", age: 19 },
  { name: "Amit", age: 33 },
  { name: "Amit", age: 19 },
];

let maximumAge = users[0];

for (let i = 0; i < users.length; i++) {
  if (users[i].age > maximumAge.age) {
    maximumAge = users[i];
  }
}

console.log(maximumAge);

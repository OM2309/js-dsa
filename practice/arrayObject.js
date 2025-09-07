const orders = [
  { user: "Anurag", items: ["Laptop", "Mouse"] },
  { user: "Riya", items: ["Mobile", "Tablet"] },
  { user: "Anurag", items: ["Keyboard", "Charger"] },
];

const newOrders = {};

for (let i = 0; i < orders.length; i++) {
  if (!newOrders.hasOwnProperty(orders[i].user)) {
    newOrders[orders[i].user] = [...orders[i].items];
  } else {
    newOrders[orders[i].user].push(...orders[i].items);
  }
}

console.log(newOrders);

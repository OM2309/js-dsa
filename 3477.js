var numOfUnplacedFruits = function (fruits, baskets) {
  let count = 0;
  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < baskets.length; j++) {
      if (baskets[j] >= fruits[i] && baskets[j] !== 0) {
        count++;
        baskets[j] = 0;
        break;
      }
    }
  }

  return fruits.length - count;
};

console.log(numOfUnplacedFruits([4, 2, 5], [3, 5, 4]));

let count = 0;
for (let i = 0; i < fruits.length; i++) {
  for (let j = 0; j < baskets.length; j++) {
    if (baskets[j] >= fruits[i] && baskets[j] !== 0) {
      console.log(baskets);
      baskets[j] = 0;
      break;
    }
  }
}

for (let i = 0; i < baskets.length; i++) {
  if (baskets[i] !== 0) {
    count++;
  }
}

return count;

const names = ["riya", "anurag", "amit", "riya", "sunita", "anurag"];

const nameDuplicate = {};

for (let i = 0; i < names.length; i++) {
  if (!nameDuplicate.hasOwnProperty(names[i])) {
    nameDuplicate[names[i]] = true;
  } else {
    nameDuplicate[names[i]] = false;
  }
}

const uniqueNames = Object.keys(nameDuplicate).filter(
  (name) => nameDuplicate[name] === true
);

console.log(uniqueNames);

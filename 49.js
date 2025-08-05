var groupAnagrams = function (strs) {
  const hashMap = {};

  for (let index = 0; index < strs.length; index++) {
    const sortStr = strs[index].split("").sort().join("");

    if (!hashMap[sortStr]) {
      hashMap[sortStr] = [];
    }
    hashMap[sortStr].push(strs[index]);
  }

  return Object.values(hashMap);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

var majorityElement = function (nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    map[el] = (map[el] || 0) + 1;
  }

  let keys = Object.keys(map);
  keys.sort((a, b) => map[b] - map[a]);
  return keys;
};

console.log(majorityElement([8, 8, 8, 3, 3, 3, 3, 3]));


let search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] < target) {
      start = middle + 1;
    }

    if (nums[middle] > target) {
      end = middle - 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));

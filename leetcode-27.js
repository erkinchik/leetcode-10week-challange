var removeElement = function(nums, val) {
    let i = nums.length;
    while (i--) {
        if (nums[i] === val) nums.splice(i, 1);
    }
    return nums
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //[0,1,4,0,3]

//[0,1,2,3,0,4] my output

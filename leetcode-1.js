const twoSum = function(nums, target) {
    const cache = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (cache[diff] !== undefined) {
            return [cache[diff], i];
        }

        cache[nums[i]] = i;
    }

};

twoSum([2,7,11,15],9)

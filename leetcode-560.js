var subarraySum = function(nums, k) {
    let prefixSum = new Map();
    prefixSum.set(0,1)
    let res = 0;
    let sum = 0
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];

        if (prefixSum.has(sum-k)) res += prefixSum.get(sum-k);
        if (prefixSum.has(sum)) prefixSum.set(sum, prefixSum.get(sum) + 1);
        else prefixSum.set(sum, 1);
    }

    return res
};

console.log(subarraySum([1,1,1],2));

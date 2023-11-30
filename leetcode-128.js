// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
//
//     You must write an algorithm that runs in O(n) time.

// Example 1:
//
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.




var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let counter = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        if(!set.has(cur - 1)){
            counter = 1
            while (set.has(cur + 1)){
                counter++
                cur++
            }
            max = Math.max(counter, max)
        }
        if(max > nums.length / 2) break
    }

    return max
};

var longestConsecutive2 = function(nums) {
    if(!nums.length) return 0;
    let set = new Set(nums);
    let output = 0;
    for (const num of nums) {
        if(!set.has(num - 1)){
            let count = 0;
            while (set.has(count + num)){
                count++
            }
            output = Math.max(output, count)
        }
    }

    return output
};


console.log(longestConsecutive( [100,4,200,1,3,2]));

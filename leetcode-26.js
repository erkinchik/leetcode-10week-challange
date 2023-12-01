var removeDuplicates = function(nums) {
    let prev = 0;

    for(let i = 1; i < nums.length; i++){
        if(nums[prev] !== nums[i]){
            prev++
            nums[prev] = nums[i]
        }
        console.log(nums)
    }
    return prev + 1
};

// console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); //[0,1,2,3,4]

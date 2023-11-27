let sortedSquares = function(nums) {
    const result = [];
    let left = 0;
    let right = nums.length - 1;

    for(let i = nums.length - 1; i >= 0; i--){
        if (Math.abs(nums[right]) > Math.abs(nums[left])){
            result[i] = nums[right] ** 2
            console.log(result)
            right--
        }else {
            result[i] = nums[left] ** 2
            left++
        }
    }

    return result;
};


console.log(sortedSquares([-4,-1,0,3,10]));
// Output: [0,1,9,16,100]//



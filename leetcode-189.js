const rotateHelper = (nums,l,r) =>{
    while(l < r){
        let temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp
        l++
        r--
    }
}
var rotate = function(nums, k) {
    const len = nums.length - 1;
    k %= nums.length
    rotateHelper(nums,0,len)
    rotateHelper(nums,0, k - 1)
    rotateHelper(nums,k, len)
    return nums
};


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

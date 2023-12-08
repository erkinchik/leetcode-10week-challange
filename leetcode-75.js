var sortColors = function(nums) {
    let mid = 0
    let low = 0
    let high = nums.length - 1
    let temp = 0
    while(mid <= high) {
        if(nums[mid] === 0){
            temp= nums[low];
            nums[low] = nums[mid];
            nums[mid]= temp;

            low++;
            mid++;
        }else if(nums[mid] === 2){
            temp = nums[high]
            nums[high] = nums[mid]
            nums[mid] = temp
            high--
        }else{
            mid++
        }
    }
};

sortColors([2,0,2,1,1,0])

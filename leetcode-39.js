var combinationSum = function(candidates, target) {
    const result = [];
    const tempArray = [];

    const dfs = (nums, currTarget, path) => {
        if(currTarget < 0) {
            return
        }

        if(currTarget === 0){
            result.push([...path])
            return;
        }

        for(let i = 0; i < nums.length; i++){
            dfs(nums.slice(i), currTarget - nums[i],[...path, nums[i]])
        }
    }

    dfs(candidates, target, tempArray);

    return result;
};


console.log(combinationSum([2,3,6,7], 7));

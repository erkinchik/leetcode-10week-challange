var topKFrequent = function(nums, k) {
     const obj =  nums.reduce((acc,curr)=>{
        acc[curr] = (acc[curr] || 0 ) + 1;
        return acc
    },{})

    const entries = Object.entries(obj).sort((a, b) =>  b[1] - a[1]);

    return entries.slice(0, k).map(([key]) => Number(key));
};


// console.log(topKFrequent([1,1,1,2,2,3], 2));




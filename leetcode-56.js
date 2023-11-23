var merge = function(intervals) {
    if(!intervals) return []

    const result = [];
    intervals.sort((a,b)=> a[0] - b[0])
    let prev = intervals[0]


    for(let i = 1; i < intervals.length; i++){
        let interval = intervals[i]
        if(interval[0] <= prev[1]){
            prev[1] = Math.max(prev[1], interval[1])
        }else{
            result.push(prev)
            prev = interval
        }
    }
    result.push(prev)

    return result
};


console.log(merge([[1,3],[2,6],[8,10],[15,18]]))

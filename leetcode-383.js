var canConstruct = function(ransomNote, magazine) {
    const map = {};

    for(let char of magazine){
        map[char] = (map[char] || 0) + 1
    }

    for(let char of ransomNote){
        if(map[char] === 0 || !map[char]){
            return false;
        }
        map[char]--
    }
    return true
};
console.log(canConstruct('a','b'));
console.log(canConstruct('aa','aab'));

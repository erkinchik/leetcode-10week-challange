var romanToInt = function(s) {
    let res = 0;
    const map = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }

    for (let i = 0; i < s.length; i++) {
        const curSymbol = map[s[i]]
        const nextSymbol = map[s[i+1]]
        if(curSymbol < nextSymbol) {
            res+= nextSymbol - curSymbol
            i++
        }else {
            res+=curSymbol
        }
    }
 return res
};

// Example 1:
//
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:
//
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
//
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('MCMXCIV'));

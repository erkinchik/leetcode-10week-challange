var plusOne = function(digits) {
    const int = BigInt(digits.join('')) + BigInt(1)

    return int.toString().split('').map(item => parseInt(item))
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); //[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

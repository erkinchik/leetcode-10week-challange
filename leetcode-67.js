var addBinary = function (a, b) {
    const sum = BigInt("0b" + a) + BigInt("0b" + b);
    return sum.toString(2);
};

let a = "11", b = "1";

console.log(addBinary(a,b))

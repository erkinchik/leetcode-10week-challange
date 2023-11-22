let isPalindrome = function (s) {
  const lowerString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  console.log(lowerString);
  return lowerString.split("").reverse().join("") === lowerString;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));

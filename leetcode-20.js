function isValid(s) {
  const dict = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];

  for (const c of s) {
    if (dict[c]) {
      stack.push(c);
    } else {
      let top = stack.pop();

      if (c !== dict[top]) {
        return false;
      }
    }
  }

  return !stack.length;
}

console.log(isValid("}{"));
//
// isValid("[]");
// console.log(isValid("[]"));

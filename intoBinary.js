const intoBinary = (n) => {
  let nCopy = n
  const stack = []
  let binary = ''

  while(nCopy > 0){
      stack.push(nCopy % 2)
      nCopy = Math.floor(nCopy / 2)
  }

  while (stack.length){
      binary += stack.pop()
  }
    // for (let i = stack.length - 1; i >= 0; i--) {
    //     binary += stack.pop()
    // }

    return binary
}

console.log(intoBinary(100));

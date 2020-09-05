function useArguments() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }
  return result;
}

console.log(useArguments(1,2,3,4));
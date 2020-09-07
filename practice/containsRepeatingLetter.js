function containsRepeatingLetter(str) {
  const par = /([a-zA-Z])\1/
  return par.test(str);
}

let res = containsRepeatingLetter('rallabc');
console.log(res);
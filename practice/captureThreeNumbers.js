function captureThreeNumbers(str) {
  const pat = /\d{3}/
  if (pat.test(str)) {
     return str.match(pat)[0]
    // return pat.exec(str)
  } else {
    return false
  }
}

const result = captureThreeNumbers('w312e')
console.log(result);
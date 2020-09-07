function matchesPattern(str){
  const pat = /^\d{3}-\d{3}-\d{4}$/
  return pat.test(str)
}

const res = matchesPattern('801-555-1212')
console.log(res);
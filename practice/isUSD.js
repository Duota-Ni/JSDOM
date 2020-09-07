function isUSD(str) {
  let pat = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/
  return pat.test(str)
}

let a = '$2119.93'

const res = isUSD(a)
console.log(res);
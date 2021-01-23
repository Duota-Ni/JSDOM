function fibonacciIterative(n) {
  if (n < 1) return 0
  if (n <= 2) return 1

  let a = 0
  let b = 1
  let c
  // n>=2 注意for里面
  for (let i = 2; i <= n; i++) {
    c = a + b
    a = b
    b = c
  }
  return c
}

let res = fibonacciIterative(5)
console.log(res)
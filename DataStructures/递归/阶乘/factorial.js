// 无优化 消耗更多内存 空间复杂度O(n)
function factorial(n) {
  console.trace()
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
factorial(4) 

// 尾调用优化 空间复杂度O(1)
// http://www.ruanyifeng.com/blog/2015/04/tail-call.html
// function factorial(n, total) {
//   if (n === 1) return total;
//   return factorial(n - 1, n * total);
// }
// factorial(4, 1)
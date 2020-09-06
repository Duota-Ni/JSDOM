// 实现函数 callIt，调用之后满足如下条件
// 1、返回的结果为调用 fn 之后的结果
// 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数

// function callIt(fn) {
//   let params = [];
//   for(let i = 1 ; i<arguments.length ; i++){
//     params.push(arguments[i])
//   }
//   return fn.apply(this, params)
// }

function callIt(fn) {
  //将arguments转化为数组后，截取第一个元素之后的所有元素
  var args = Array.prototype.slice.call(arguments,1);
  //调用fn
  var result = fn.apply(null,args);
  return result;
}


let fun = function (a, b) {
  console.log('fun!' + a + b);
}
let result = callIt(fun,1,2)
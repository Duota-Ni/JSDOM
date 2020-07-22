//测试使用push和unshift返回的数组length是多少
let colors = new Array();
let x = colors.push("red",'bule');
console.log(x);  //2

let y = colors.unshift('black');
console.log(y);  //3

//push\pop\shift\unshift都是修改原数组
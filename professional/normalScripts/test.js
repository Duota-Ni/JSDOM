function curtail(arr) {
  var result = arr.slice();
    result.shift();
    return result;
}


let arr = [1, 2, 3, 4];
let item = 10;
let result = curtail(arr, item);
console.log(result);
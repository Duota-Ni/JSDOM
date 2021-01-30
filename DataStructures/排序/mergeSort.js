
function merge(left, right) {
  let i = 0;
  let j = 0;
  const result = [];
  // console.log(right);
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]); 
    // right[j++] === 先right[j],再j++ 优先级 [] > ++ ，但是这里不能拆开写，必须写right[j++]这样子，因为三目判断对[] ++ 都有
    // console.log(j) // 注意在left[i++] : right[j++]中i或者j的值已经改变，
    // console.log(result);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}
export function mergeSort(array) {
  const length = array.length
  if (length > 1) {
    // console.log(`array start: ${array}`)
    // const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle, length));
    // console.log(`left: ${left}  right: ${right}`); //注意使用模板字符串会自动将array转化为string
    // console.log(left);
    // console.log(right);
    array = merge(left, right);
    // console.log(array)
  }
  return array;
}

// let ary = [12, 6, 3, 29, 13];
// let ary = [5, 4, 3, 2, 1];
// let ary = [7, 8, 6, 5, 4, 3, 2, 1];
let ary = [9, 5, 6, 4]

ary = mergeSort(ary);
console.log(ary);
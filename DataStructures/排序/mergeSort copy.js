
function merge(left, right) {
  let i = 0
  let j = 0
  let result = []
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++])
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
export function mergeSort(array) {
  let length = array.length
  if (length > 1) {
    const middle = Math.floor(length / 2)
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(middle, length))
    array = merge(left, right)
  }
  return array
}

// let ary = [12, 6, 3, 29, 13];
// let ary = [5, 4, 3, 2, 1];
// let ary = [7, 8, 6, 5, 4, 3, 2, 1];
let ary = [9, 5, 6, 4]
ary = mergeSort(ary);
console.log(ary);
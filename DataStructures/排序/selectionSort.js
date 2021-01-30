function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

function selectionSort(array) {
  const length = array.length
  let indexMin
  for (let i = 0; i < length - 1; i++) {
    indexMin = i
    // 注意j = i 而不是 j = 0，如果j = 0,每次找到的最小值都是1,而不是依次数组最小值，第二小值...
    for (let j = i; j < length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j
      }
    }
    if (indexMin !== i) {
      swap(array, indexMin, i)
    }
  }
  return array
}

// let ary = [12, 6, 3, 29, 13];
let ary = [5, 4, 3, 2, 1];

ary = selectionSort(ary);
console.log(ary);
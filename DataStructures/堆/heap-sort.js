import { defaultCompare, swap } from '../util.js';

function heapify(array, index, heapSize, compareFn) {
  let largest = index;
  const left = (2 * index) + 1;
  const right = (2 * index) + 2;
  if (left < heapSize && compareFn(array[left], array[index]) > 0) {
    largest = left;
  }
  if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
    largest = right;
  }
  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
}

function buildMaxHeap(array, compareFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn);
  }
  return array;
}

export default function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length;
  console.log("1",array)
  buildMaxHeap(array, compareFn) //这里创建最大堆并返回对应的array array被改变
  console.log("2",array) //array被改变
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, compareFn);
  }
  return array;
}

// const array = [7,6,3,5,4,1,2]
const array = [7,3,6,5,4,1,2] // 不是最大堆的数组
console.log("before sorting: ", array )
console.log("after sorting: ", heapSort(array))


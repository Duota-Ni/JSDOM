function swap(array,a,b){
  // const temp = array[a];
  // array[a] = array[b];
  // array[b] = temp;
  [array[a],array[b]] = [array[b],array[a]];

}

// function bubbleSort(array,compareFn = defaultCompare){
//   const {length} = array;
//   for(let i = 0; i<length; i++){
//     for(let j =0 ; j <length -1;j++){
//       if(compareFn(array[i],array[j+1]) === compareFn.BIGGER_THAN){
//         swap(array,j,j+1);
//       }
//     }
//   }
//   return array;
// }

function bubble(array){
  //外层i控制比较的轮数
  let temp = null;
  for(let i = 0;i<array.length-1;i++){
    for(let j = 0;j<array.length-1-i;j++){
      if(array[j]>array[j+1]){
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  return array;
}

let ary = [12,6,3,29,13];
ary = bubble(ary);
console.log(ary);
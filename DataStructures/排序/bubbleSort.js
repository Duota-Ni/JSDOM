function swap(array,a,b){
  const
}

function bubbleSort(array,compareFn = defaultCompare){
  const {length} = array;
  for(let i = 0; i<length; i++){
    for(let j =0 ; j <length -1;j++){
      if(compareFn(array[i],array[j+1]) === compareFn.BIGGER_THAN){
        swap(array,j,j+1);
      }
    }
  }
  return array;
}

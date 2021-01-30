function quick(ary) {
  //4.结束递归（当ary中小于等于一项，则不用处理）
  if (ary.length <= 1) {
    return ary;
  }
  //1.找到数组的中间项，在原有的数组中把他移除
  let middleIndex = Math.floor(ary.length / 2);
  let middleValue = ary.splice(middleIndex, 1)[0];
  //2.准备左右两个数组，循环剩下数组中的每一项，比当前项小的放到左边数组，反之放到右边数组
  let aryleft = [],
    aryright = [];
  for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    item < middleValue ? aryleft.push(item) : aryright.push(item);
  }
  //3.递归方式让左右两边的数组持续这样处理，一直到左右两边都排好序为止（最后让左边+中间+右边连接返回最后的结果）
  return quick(aryleft).concat(middleValue, quick(aryright));
}
const ary = [12, 6, 3, 29, 13];
const res = quick(ary);
console.log(res);
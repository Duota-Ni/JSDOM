function insert(ary){
  //1.准备一个新数组,用来存储抓到手里的牌，开始先抓一张牌进来
  let handle = [];
  handle.push(ary[0]);

  //2.从第2项开始抓牌，一直到抓光
  for(let i=1;i<ary.length;i++){
    //A是新抓的牌
    let A = ary[i];
    //和handle手里的牌比较（从后往前比）
    for(let j=handle.length-1;j>=0;j--){
      //每一次要比较的手里的牌
      let B = handle[j];
      //如果新牌A比要B大，把A放到B后
      if(A>B){
        handle.splice(j+1,0,A);
        break;
      }
      //已经比较到第一项，把手里的新牌放到手中最前面即可
      if(j===0){
        handle.unshift(A);
      }
    }
  }
  return handle;
}
const ary = [12,6,3,29,13];
const res = insert(ary);
console.log(res);
// function containsNumber(str) {
//   let boo = false
//   if(str.search(/\d+/g) !== -1){
//     boo = true
//   }
//   return boo
// }

function containsNumber(str) {
  const reg = /\d+/g
  return reg.test(str)
}

let res = containsNumber('ac')
console.log(res);
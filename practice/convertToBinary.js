// function convertToBinary(num) {
//   const str = num.toString(2)
//   const args = Array.prototype.slice.call(str)
//   while (args.length < 8) {
//     args.unshift(0)
//   }
//   const result = args.join('').toString()
//   return result;
// }

function convertToBinary(num) {
  let str = num.toString(2)
  while(str.length < 8){
    str = '0' + str;
  }
  return str;
}

console.log(convertToBinary(12));
// Object.entries(obj)
// function iterate(obj) {
//   let res = []
//   for (const [key, value] of Object.entries(obj)) {
//     // console.log(`${key}: ${value}`);
//     // console.log(key + ': ' + value);
//     let str = key + ": " + value
//     res.push(str)
//   }  
//   return res
// }

// Object.keys(obj)
// function iterate(obj) {
//   return Object.keys(obj).map((key) => {
//     return key + ": " +obj[key]
//   })
// }

//Object.prototype.hasOwnProperty()
function iterate(obj) {
  var ownPropertyArr = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      ownPropertyArr.push(key + ": " + obj[key]);
    }
  }
  return ownPropertyArr;
}

var C = function () { this.foo = 'bar'; this.baz = 'bim'; };
C.prototype.bop = 'bip';

console.log(iterate(new C()));
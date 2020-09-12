// let uid = Symbol.for('uid'),
// // desc = String(uid);
// // desc = uid.toString()
// desc = String(uid) + ''
// console.log(desc);

// const a = "#"+33+55+66;
// console.log(a);

// let uid = Symbol.for("uid");
let uid = Symbol();
let object = {
  [uid]:'12345'
};

let symbols = Object.getOwnPropertySymbols(object);

console.log(symbols.length); 
console.log(symbols[0]);  
console.log(object[symbols[0]]);
// class Person {
//   constructor (name) {
//        this.name = name;
//   }
//   greet () {
//        console.log(`Hi, my name is ${this.name}`);
//   }
//   greetDelay (time) {
//        setTimeout(() => {
//             console.log(`Hi, my name is ${this.name}`);
//        }, time);
//   }
// }

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hi, my name is ${this.name}`);
}
Person.prototype.greet = function () {
  let that = this;
  setTimeout(function(){
    console.log(`Hi, my name is ${that.name}`);
  }, time);
}
function SuperType() {
  this.property = "super"
  this.colors = ["red","blue", "green"]
}

SuperType.prototype.getSuperValue = function () {
  return this.property
}

function SubType() {
  this.subproperty = "sub"
}

SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function () {
  return this.subproperty
}

SubType.prototype.getSuperValue = function () { //这里没有改变SuperType的getSuperValue
  return "hhh"
}

let instance1 = new SubType()
console.log(instance1.getSuperValue())

let superInstance = new SuperType()
console.log(superInstance.getSuperValue())
console.log(superInstance.property)
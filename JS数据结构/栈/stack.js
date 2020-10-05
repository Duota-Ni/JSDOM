//基于JavaScript对象的Stack类
//这种ES6基于原型的类能节省内存空间并在扩展方面优于基本函数的类，但不能声明私有属性（变量）或方法
//可用Symbol声明私有属性或方法
export default class Stack{
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(element){
    this.items[this.count] = element;
    this.count++;
  }
  size(){
    return this.count;
  }
  isEmpty(){
    return this.count === 0;
  }
  pop(){
    if(this.isEmpty()){
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    return this.items[this.count -1];
  }
  clear(){
    this.items = {};
    this.count = 0;
  }
  toString(){
    if(this.isEmpty()){
      return '';
    }
    let objString =`${this.items[0]}`;
    for(let i = 1; i<this.count;i++){
      objString = `${objString},${this.items[i]}`
    }
    return objString;
  }
}
// const stack = new Stack();
// stack.push(5);
// stack.push(8);
// console.log(stack);
// console.log(stack.pop());
// console.log(stack);

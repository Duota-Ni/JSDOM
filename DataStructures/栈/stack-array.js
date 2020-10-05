//基于数组的栈
class Stack{
  constructor() {
    this.items = []
  }
  push(element){
    this.items.push(element);
  }
  pop(){
    return this.items.pop();
  }
  peek(){
    return this.items[this.items.length - 1]
  }
  isEmpty(){
    return this.items.length === 0;
  }
  size(){
    return this.items.length;
  }
  clear(){
    this.items = []
  }
}
const stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);
stack.push(11);
console.log(stack.size());
stack.push(11);
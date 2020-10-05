//实现私有变量的栈

//1.Symbol
//但是能用Object.getOwnPropertySymbols(obj)
// const _items = Symbol('stackItems');
// const _count = Symbol('count')
// class Stack{
//   constructor() {
//     this[_items] = []
//     this[_count] = 0
//   }
//   push(element){
//     this._items[this._count] = element;
//     this._count ++;
//   }
// }
// //破坏
// const stack = new Stack();
// stack.push(5);
// stack.push(8)
// console.log(stack);

//2.WeakMap
const items = new WeakMap();
class Stack{
  constructor() {
    items.set(this,[])
  }
  push(element){
    const s = items.get(this);
    s.push(element);
  }
  pop(){
    const s = item.get(this);
    const r = s.pop();
    return r;
  }
}
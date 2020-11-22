//双端队列结构，可以同时从前端和后端添加移除元素
export class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {//lowestCount === 0 时
      for (let i = this.count; i > 0; i--) {
        this.items[i] == this.items[i - 1];//元素后移一位
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    let result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    let result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peekFront() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  peekBack() {
    if (this.isEmpty) {
      return undefined
    }
    return this.item[this.count - 1]
  }
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString;
  }
}
export default Deque;
// const deque = new Deque();
// console.log(deque.isEmpty()); // 输出true 
// deque.addBack('John');
// deque.addBack('Jack');
// console.log(deque.toString()); // John, Jack 
// deque.addBack('Camila');
// console.log(deque.toString()); // John, Jack, Camila 
// console.log(deque.size()); // 输出3 
// console.log(deque.isEmpty()); // 输出false 
// deque.removeFront(); // 移除John 
// console.log(deque.toString()); // Jack, Camila 
// deque.removeBack(); // Camila决定离开 
// console.log(deque.toString()); // Jack 
// deque.addFront('John'); // John回来询问一些信息 
// console.log(deque.toString()); // John, Jack
//使用对象声明队列
export class Queue {
  constructor() {
    this.count = 0;//队列大小
    this.lowestCount = 0;//前端第一个元素
    this.items = {}
  }
  enqueue(element){
    this.items[this.count] = element;
    this.count++;
  }
  dequeue(){
    if(this.isEmpty()){
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  peek(){
    if(this.isEmpty()){
      return undefined;
    }
    return this.items[this.lowestCount]
  }
  isEmpty(){
    return this.count - this.lowestCount === 0;
  }
  size(){
    return this.count - this.lowestCount;
  }
  clear(){
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString(){
    if(this.isEmpty()){
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for(let i = this.lowestCount +1 ;i<this.count;i++){
      objString = `${objString},${this.items[i]}`
    }
    return objString;
  }
}

// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue('jack');
// queue.enqueue('lucy');
// console.log(queue.toString());
// console.log(queue.size());
// queue.dequeue();
// console.log(queue.toString());

//linkedList类
import { defaultEquals } from '../util.js'
import { Node } from '../models/linked-list-models.js' //Node表示想要添加到链表中的项

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0 //元素数量
    this.head = undefined //第一个元素的引用
    this.equalsFn = equalsFn
  }

  push(element) {
    const node = new Node(element)
    let current //当前元素
    if (this.head === undefined || this.head === null) { //空链表情况
      this.head = node
    } else {
      current = this.head //因为只有指向第一个元素的指针，因此开始循环遍历至最后一个元素，最后一个元素的next是null或者undefined
      while (current.next !== null || current.next !== undefined) {
        current = current.next //遍历获得current为最后一项
      }
      current.next = node //赋值
    }
    this.count++
  }


}


const list1 = new LinkedList()
list1.push(12)
console.log(list1)
list1.push(76)
console.log(list1)
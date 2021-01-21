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
      while (current.next !== null && current.next !== undefined) {
        current = current.next //遍历获得current为最后一项
      }
      current.next = node //赋值
    }
    this.count++
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head
      for (let i = 0; i < index && node !== null && node !== undefined; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        current = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }

  insert(element, index) {
    if (index >= 0 && index < this.count) {

    }
  }

  insert(element, index) {
    if (index >= 0 && index < this.count) {
      const node = new Node(element)
      if (index === 1) {
        const current = this.head
        node.next = current
        node = this.head
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count++
      return true
    }
    return undefined
  }

  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null && current !== undefined; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  getHead() {
    return this.head
  }

  toString() {
    if (this.head === null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current !== null && current !== undefined; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }

}


// const list1 = new LinkedList()
// list1.push(12)
// list1.push(6)
// list1.push(122)
// list1.push(7)
// list1.push(8)
// list1.push(0)
// console.log(list1)
// // let a = list1.removeAt(3)
// // console.log(a)
// // const b = list1.insert(99, 2)
// // console.log(b)
// // const c = list1.indexOf(8)
// // console.log(c)
// const d = list1.toString()
// console.log(d)
import { defaultEquals } from '../util';
import LinkedList from './linked-list';
import { Node } from './models/linked-list-models';

class CricularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      let current = this.head
      if (index === 0) {
        if (this.head === null || this.head === undefined) {
          this.head = node
          node.next = this.head
        } else {
          node.next = current
          current = this.getElementAt(this.size())
          // 更新最后一个元素
          this.head = node
          current.next = this.head
        }
      } else {
        const previous = this.getElementAt(index - 1)
        node.next = previous.next
        previous.next = node
      }
      this.count++
      return true
    }
    return false
  }
}
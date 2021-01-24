import { Compare, defaultCompare } from '../util.js';
import { Node } from '../models/node.js';

// 二叉搜索树
export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = undefined
  }

  insert(key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root,key)
    }
  }

  insertNode(node, key) {
    if(this.compareFn(key,node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    }
  }

  // 中序遍历,顺序遍历
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node,callback) {
    this.inOrderTraverseNode(node.left, callback)
    callback(node.key)
    this.inOrderTraverseNode(node.right, callback)
  }

  // 先序遍历
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node,callback) {
    callback(node.key)
    this.preOrderTraverseNode(node.left, callback)
    this.preOrderTraverseNode(node.right, callback)
  }

  // 后序遍历
  hostOrderTraverse(callback) {
    this.hostOrderTraverseNode(this.root, callback)
  }

  hostOrderTraverseNode(node, callback) {
    this.hostOrderTraverseNode(node.left, callback)
    this.hostOrderTraverseNode(node.right, callback)
    callback(key)
  }

  min() {
    return this.minNode(this.root)
  }

  minNode(node) {
    let current = node
    if (current != null && current.left != null) {
      current = current.left
    }
    return current
  }

  max() {
    return maxNode(this.root)
  }

  maxNode() {
    let current = node
    if (current != null && current.right != null){
      current = current.right
    }
    return current
  }

  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node == null) {
      return false
    }
    if (this.compareFn(key,node.key) === Compare.LESS_THAN) {
      this.searchNode(node.left, key)
    } else if ( this.compareFn(key,node.key) === Compare.BIGGER_THAN) {
      this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  removeNode(node, key) {
    
  }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(6)
tree.insert(1)
tree.insert(13)
tree.insert(15)
tree.insert(8)
import { defaultCompare } from '../util.js';
import { BinarySearchTree } from './binary-search-tree.js'
import { Compare, defaultCompare } from '../util'
import { Node } from './models/node'

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIG
}

class ALVTree extends BinarySearchTree {
  constructor (compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }

  // 计算节点高度
  getNodeHeight(node) {
    if (node == null) {
      return -1
    }
    return Math.max( 
      this.getNodeHeight(node.left), this.getNodeHeight(node.right) ) + 1
  }

  
}
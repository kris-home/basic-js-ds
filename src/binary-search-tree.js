const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;

  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    
    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
    return searchNode(this.rootTree, data);
  }

  find(data) {
    
    function findNodeData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findNodeData(node.left, data);
      } else {
        return findNodeData(node.right, data);
      }
    }
    return findNodeData(this.rootTree, data);
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let min = this.rootTree;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    let max = this.rootTree;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};
const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class BinarySearchTree {
//
//   root() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//
//   add(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//
//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//
//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//
//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//
//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//
//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }
//
// module.exports = {
//   BinarySearchTree
// };

class Node {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
};


class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  add(data) {
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }

    this.rootElement = addWithin(this.rootElement, data);
  }

  has(data) {
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
          searchWithin(node.left, data) :
          searchWithin(node.right, data);
    }

    return searchWithin(this.rootElement, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }

    this.rootElement = removeNode(this.rootElement, data);
  }

  min() {
    if (!this.rootElement) {
      return;
    }

    let node = this.rootElement;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootElement) {
      return;
    }

    let node = this.rootElement;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  root(data) {
    if (!this.rootElement) {
      return null;
    }
    return this.rootElement;
  }

  find(d) {
    // returns node with the data if node with the data exists in the tree and null otherwise

    /*
    function leftTraverse(node, data) {
      function doLeft(node, func) {
        if (node) {
          doLeft(node.left, func);
          func(node.data);
          doLeft(node.right, func);
        }
      }

      doLeft(this.rootElement, func);
    }

    function rightTraverse(func) {
      function doRight(node, func) {
        if (node) {
          doRight(node.right, func);
          func(node.data);
          doRight(node.left, func);
        }
      }

      doRight(this.rootElement, func);
    }
    */

    function doFind(node, example) {
      if (!node) {
        return null;
      }

      if (node.data === example) {
        return node;
      }

      if (example < node.data) {
        return doFind(node.left, example);
      } else {
        return doFind(node.right, example);
      }
    }

    return doFind(this.rootElement, d);
/*
   // check for empty
    if (!this.rootElement) {
      return null;
    }

    let node = this.rootElement; // === node.data

    // check: root node is equal searched node?
    if (node.data === data) {
      return node;
    }

    // tree is not empty and (searched node!==node.root)
    // 1) left branch
    if (data < node.data) {
      node.left.find
      leftTraverse(node.left, data);
    } else {
      // data > node.data => right branch
      rightTraverse(node.right, data);
    }
 */
  }

}

module.exports = {
  BinarySearchTree
};

const { NotImplementedError } = require('../extensions/index.js');
const {ListNode} = require("../extensions");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// function removeKFromList(/* l, k */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
//
// module.exports = {
//   removeKFromList
// };


/*let l1 = new ListNode(3);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(5);
l1.next.next.next.next = new ListNode(6);
l1.next.next.next.next.next = new ListNode(4);


function copyLinkedList(list) {
  let result = new ListNode()

  return result;
}

function printLinkedList(list) {
  let str = '';
  while (list !== null) {
    let v = list.value;
    str += `${v}, `;
    list = list.next;
  }

  return str.slice(0, str.length - 2);
}

*/
// "3, 4, 3, 5, 6, 4"

  function removeKFromList(list, example) {
        // for (; current.next !== null; )
    if (!list) {
      return null;
    }

    let deleted = null; // save link
    while (list && list.value === example) {
      deleted = list;
      list = list.next;
    }

    let current = list;

    if (current !== null) {
      while (current.next) {
        if (current.next.value === example) {
          deleted = current.next;
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }

    return list;
  }

    // let list = convertArrayToList(l);
   /*
    let current = l.head;
    if (list.length === 1) {
      if (current === k) {
        return null;
      } else {
        return current;
      }
    }

    result = [];
    // while we have next node we are checking the list and add to result each element. which !== K
    while (current.next) {
      if (current !== k) {
        result += current;
        current = current.next;
    }
    return result;
    }
    */


/*
// console.log(l1);
console.log("--------------------------");
console.log(printLinkedList(l1));
console.log("--------------------------");
// console.log(l1);
console.log(printLinkedList(copyLinkedList(l1)));
console.log("--------------------------");
// console.log(removeKFromList(l1, 4));
// console.log(removeKFromList(l1, 3));
*/

module.exports = {
  removeKFromList
};

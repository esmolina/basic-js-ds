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


//судя по всему, нам дан массив, который мы должны преобразовать в список, для этого пишем функцию

// 1. create class-constructor
// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// 2. create list from array
// function convertArrayToList(l) {
//   if (!l.length) {
//     return null;
// }
//   return l.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }
//
//     return new ListNode(cur);
//   }, null);
// }

// 3. byPass of list for checking

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

  function removeKFromList(data, example) {
    let list = new ListNode(data)
    // for (; current.next !== null; )
    while (list !== null) {
      if (list.next !==0 && list.next.value === example) {
        list = list.next;

      }
        list = list.next;
      if (list.next ==0) {return list}

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

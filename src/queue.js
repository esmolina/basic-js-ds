const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
// class Queue {
//
//   getUnderlyingList() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//
//   enqueue(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
//
//   dequeue() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }
//
// module.exports = {
//   Queue
// };

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;

  }

  getUnderlyingList() {
// возвращает базовый связанный список
    return this.head;
  }

  enqueue(value) {
    //помещает значение в конец очереди
    if (!this.head) {
      this.head = new ListNode(value);
      return;
    }

    let current = this.head;

    // move to the last node
    while(current.next) {
      // while next !== 0 change link to the next element. Last element have not next element
      current = current.next;
    }

    current.next = new ListNode(value);
  }

  dequeue() {
    //извлекает значение из головы очереди и удаляет его
    if (!this.head) {
      return null;
    }

    let current = this.head;
    this.head = current.next;

    return current.value;
  }
}

module.exports = {
  Queue
};


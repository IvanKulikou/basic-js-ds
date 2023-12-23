const { NotImplementedError } = require('../extensions/index.js');

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null; // Front of the queue
    this.rear = null;  // Rear of the queue
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.front) {
      // If the queue is empty, the new node becomes both front and rear
      this.front = newNode;
      this.rear = newNode;
    } else {
      // Otherwise, add the new node to the rear and update the rear reference
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      // If the queue is empty, return undefined
      return undefined;
    }

    const removedValue = this.front.value;

    if (this.front === this.rear) {
      // If there is only one element, reset both front and rear to null
      this.front = null;
      this.rear = null;
    } else {
      // Otherwise, update the front reference to the next node
      this.front = this.front.next;
    }

    return removedValue;
  }
}

module.exports = {
  Queue
};

const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  constructor() {
    this.items = []; // Using an array to store stack elements
  }

  push(element) {
    this.items.push(element); // Add element to the top of the stack
  }

  pop() {
    if (this.items.length === 0) {
      return undefined; // If the stack is empty, return undefined
    }
    return this.items.pop(); // Remove and return the top element from the stack
  }

  peek() {
    if (this.items.length === 0) {
      return undefined; // If the stack is empty, return undefined
    }
    return this.items[this.items.length - 1]; // Return the top element without removing it
  }
}

module.exports = {
  Stack,
};

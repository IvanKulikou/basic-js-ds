const { NotImplementedError } = require('../extensions/index.js');

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  // Handle empty list
  if (!l) {
    return null;
  }

  // Create a dummy node to simplify the removal of the first node
  const dummy = new ListNode(0);
  dummy.next = l;

  let current = dummy;

  // Iterate through the list
  while (current.next) {
    // Check if the next node has the value to be removed
    if (current.next.value === k) {
      // Remove the node by skipping it
      current.next = current.next.next;
    } else {
      // Move to the next node
      current = current.next;
    }
  }

  // Return the modified list (excluding nodes with value k)
  return dummy.next;
}

module.exports = {
  removeKFromList,
};

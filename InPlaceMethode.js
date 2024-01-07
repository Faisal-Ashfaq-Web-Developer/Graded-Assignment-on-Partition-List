// Corrected ListNode class
class ListNode {
    constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  // Function to partition a linked list around a given value 'x'
  function partition(head, x) {
    // Initialize 'before' and 'after' pointers
    let before = beforeHead = new ListNode(0);
    let after = afterHead = new ListNode(0);
  
    // Traverse the original linked list
    let current = head;
    while (current) {
      // If the current node's value is less than 'x', move it to the 'before' partition
      if (current.value < x) {
        before.next = current;
        before = before.next;
      } else {
        // Move 'current' to the 'after' partition
        after.next = current;
        after = after.next;
      }
      // Move 'current' to the next node
      current = current.next;
    }
  
    // Link the tail of the 'before' partition to the head of the 'after' partition
    before.next = afterHead.next;
    // End the 'after' partition
    after.next = null;
  
    // Return the modified linked list starting from the 'before' partition
    return beforeHead.next;
  }
  
  // Example usage:
  // Constructing the linked list
  // 1 -> 4 -> 3 -> 2 -> 5 -> 2, and x = 3
  const head = new ListNode(1);
  head.next = new ListNode(4);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(2);
  head.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next = new ListNode(2);
  
  // Applying the partition function
  const newHead = partition(head, 3);
  
  // Printing the partitioned list
  let current = newHead;
  while (current) {
    process.stdout.write(current.value + (current.next ? " -> " : "\n"));
    current = current.next;
  }
  
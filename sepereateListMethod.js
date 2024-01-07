// Corrected ListNode class
class ListNode {
    constructor(value = 0, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  // Function to partition a linked list around a given value 'x'
  function partition(head, x) {
    // Initialize 'dummy' nodes for the two partitions
    const dummy1 = new ListNode(0);
    const dummy2 = new ListNode(0);
    let current1 = dummy1;
    let current2 = dummy2;
  
    // Traverse the original linked list
    let current = head;
    while (current) {
      // If the current node's value is less than 'x', append it to the first partition
      if (current.value < x) {
        current1.next = current;
        current1 = current1.next;
      } else {
        // Append the current node to the second partition
        current2.next = current;
        current2 = current2.next;
      }
      // Move 'current' to the next node
      current = current.next;
    }
  
    // Link the tail of the first partition to the head of the second partition
    current1.next = dummy2.next;
    // End the second partition
    current2.next = null;
  
    // Return the modified linked list
    return dummy1.next;
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
  
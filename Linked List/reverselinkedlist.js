var reverseList = function(head) {
  let current = head;
  let previous = null;

  while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
  }

  return previous;
};
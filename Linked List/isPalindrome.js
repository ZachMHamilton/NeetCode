var isPalindrome = function(head) {
  let slow = head;
  let fast = head;
  let prev = null;
  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  while (slow) {
      let next = slow.next;
      slow.next = prev;
      prev = slow;
      slow = next;
  }
  fast = head;
  slow = prev;
  while (slow) {
      if (fast.val !== slow.val) return false;
      else {
          fast = fast.next;
          slow = slow.next
      }
  }
  return true;
};
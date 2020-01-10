/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

  let a = head

  const findNext = (node) => {
    if(node.next === null) {
      return null;
    } else if(node.next.val !== node.val) {
      return node.next 
    } else {
      return findNext(node.next)
    }
  }

  while(true) {
    if(a === null) break;
    a.next = findNext(a);
    a = a.next;
  }

  return head;
};
// @lc code=end


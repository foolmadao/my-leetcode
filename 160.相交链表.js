/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(!headA || ! headB) return null;
  let a = headA;
  let b = headB;
  let aChange = true;
  let bChange = true;
  while(a !== b) {
    if(a.next === null && aChange) {
      a = headB;
      aChange = false;
    } else {
      a = a.next
    }
    if(b.next === null  && bChange) {
      b = headA;
      bChange = false;
    } else {
      b = b.next
    }
  }

  return a
};
// @lc code=end


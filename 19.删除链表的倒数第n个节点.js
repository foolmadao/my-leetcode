/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const nodeArr = [];
  let a = head;
  while(a) {
    nodeArr.push(a)
    a = a.next
  }
  const len = nodeArr.length;
  if(len === 1) return null;
  if(len - n - 1 >= 0 && len - n + 1 < len) {
    nodeArr[len - n - 1].next = nodeArr[len - n + 1]
    return head;
  } else if(len - n - 1 < 0) {
    return head.next;
  } else if(len - n + 1 === len) {
    nodeArr[len - n - 1].next = null;
    return head;
  }
 

  
};
// @lc code=end


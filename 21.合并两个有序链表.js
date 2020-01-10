/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let newList = null;
  let cur;

  const getNext = () => {
    let a = l1? l1.val: null;
    let b = l2? l2.val: null;

    if (a === null || b === null) {
      if(a !== null) l1 = l1.next;
      if(b !== null) l2 = l2.next;
      return  a === null ? new ListNode(b) : new ListNode(a);
    } else if (a > b) {
      l2 = l2.next;
      return new ListNode(b);
    } else {
      l1 = l1.next;
      return new ListNode(a);
    }
  }

  while(l1 || l2) {
    if(!newList) {
      newList = getNext();
      cur = newList
    } else {
      cur.next = getNext();
      cur = cur.next;
    }
  }

  return newList;
};
// @lc code=end


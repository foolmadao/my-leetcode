/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if(head === null) return null
  let newBef = null;
  let curBef = null;
  let newAft = null;
  let curAft = null;

  a = head

  const pushInBeforeNode = (val) => {
    if(newBef) {
      curBef.next = new ListNode(val);
      curBef = curBef.next;
    } else {
      newBef = new ListNode(val);
      curBef = newBef;
    }
  }

  const pushInAfterNode = (val) => {
    if(newAft) {
      curAft.next = new ListNode(val);
      curAft = curAft.next;
    } else {
      newAft = new ListNode(val);
      curAft = newAft;
    }
  }

  while(a) {
    if(a.val < x) {
      pushInBeforeNode(a.val)
    } else {
      pushInAfterNode(a.val)
    }
    a = a.next
  }

  if(!curBef) {
    return newAft
  } else {
    curBef.next = newAft
  }


  return newBef;
};
// @lc code=end


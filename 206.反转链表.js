/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {

    if(!head) return null
    const nodeList = [];

    let currentHead = head;

    while (currentHead.next !== null) {
      nodeList.unshift(currentHead);

      currentHead = currentHead.next;
    }

    nodeList.unshift(currentHead);

    nodeList.forEach((t,i) => {
      t.next = nodeList[i+1] || null;
    })

    return nodeList[0];
};
// @lc code=end


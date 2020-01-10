/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  let nodeArr = [];
  let a = head;
  while(a) {
    nodeArr.push(a.val);
    a = a.next;
  }
  const getRoot = (list) => {
    if(list.length === 0) return null;
    const mid = Math.floor(list.length / 2);
    const root = new TreeNode(list[mid])

    root.left = getRoot(list.slice(0, mid));
    root.right = getRoot(list.slice(mid+1));

    return root;
  }

  return getRoot(nodeArr)
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let isBalance = true;
  const getlen = (node) => {
    if(!node) return 0;
    const left = getlen(node.left) + 1;
    const right = getlen(node.right) + 1;
    if(Math.abs(left - right) > 1) isBalance = false;

    return Math.max(left, right);
  }
  getlen(root)
  return isBalance;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if(!root) return 0
  result = 0;
  const preSearch = (node, isleft) => {
    if(isleft && !node.left && !node.right) result += node.val;

    if(node.left) preSearch(node.left, true);
    if(node.right) preSearch(node.right, false);
  }

  preSearch(root, false)

  return result
};
// @lc code=end


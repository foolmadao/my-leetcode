/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const list = [];
  const stack = [];
  let node = root;
  while(node !== null || stack.length !== 0) {
    while(node !== null) {
      stack.push(node)
      node = node.left
    }
    const cur = stack.pop();
    list.push(cur.val);
    node = cur.right
  }

  return list;
};
// @lc code=end


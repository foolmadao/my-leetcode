/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if(inorder.length === 0) return null;
  const len = postorder.length
  const root = new TreeNode(postorder[len - 1]);
  const mid = inorder.findIndex(t => t === postorder[len - 1])

  root.left = buildTree(inorder.slice(0,mid), postorder.slice(0,mid));
  root.right = buildTree(inorder.slice(mid+1), postorder.slice(mid, len - 1));

  return root

};
// @lc code=end


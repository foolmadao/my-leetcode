/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if(!root) return [];
  const target = [];

  const searchNode = (node) => {
    target.push(node.val);
    node.children.map(t => {
      searchNode(t);
    })
  }

  searchNode(root)

  return target;
};
// @lc code=end


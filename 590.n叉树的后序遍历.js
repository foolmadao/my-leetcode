/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  const getList = (node) => {
    if(!node) return [];
    if(!node.children || node.length === 0) {
      return [node.val];
    }
    const cur = [];
    node.children.map(t => {
      cur.push(...getList(t))
    })
    cur.push(node.val)
    return cur;
  }

  return getList(root);
};
// @lc code=end


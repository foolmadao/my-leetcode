/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) return []
  const queue = [root];
  const result = [];

  while(queue.length) {
    const arr = []
    const target = []
    while(queue.length) {
      const cur = queue.shift();
      target.push(cur.val);
      if(cur.left !== null) arr.push(cur.left);
      if(cur.right !== null) arr.push(cur.right);
    }
    result.unshift(target);
    queue.push(...arr)
  }

  return result
};
// @lc code=end


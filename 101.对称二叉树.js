/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
  if(!root) return true;
  let queue = [root];

  while(queue.length) {
    const newQueue = [];
    queue.map(item => {
      newQueue.push(item.left || null);
      newQueue.push(item.right || null);
    })

    queue = newQueue.filter(t => !!t);
    while(newQueue.length) {
      const head = newQueue.shift();
      const foot = newQueue.pop();
      if((!head || !foot) && head !== foot) return false;
      if(head && foot && head.val !== foot.val) return false;
    }
  }

  return true;
};
// @lc code=end


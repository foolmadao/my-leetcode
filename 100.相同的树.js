/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(!p || !q) return p === q;
  if(p.val !== q.val) return false;
  const queue = [p, q];
  while(queue.length) {
    const node1 = queue.shift();
    const node2 = queue.shift();
    if(node1.val === 4253) console.log(node1, node2)
    if(node1.left && node2.left && node1.left.val === node2.left.val) {
      queue.push(node1.left, node2.left)
    }
    if(node1.right && node2.right && node1.right.val === node2.right.val) {
      queue.push(node1.right, node2.right)
    }
    if(!node1.left || !node2.left || !node1.right || !node2.right) {
      if((!node1.left && node2.left) || (node1.left && !node2.left)) {
        return false
      }
      if((!node1.right && node2.right) || (node1.right && !node2.right)) {
        return false
      }
    }
    if(node1.left && node2.left && node1.left.val !== node2.left.val) return false;
    if(node1.right && node2.right && node1.right.val !== node2.right.val) return false;
  }
  return true
};


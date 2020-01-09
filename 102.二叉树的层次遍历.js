/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
var levelOrder = function(root) {
  if(!root) return [];
  let queue = [root];
  const target = [[root.val]];

  while(true) {
    let layerArr = [];
    queue.map(t => {
      layerArr.push(t.left, t.right)
    })
    layerArr = layerArr.filter(t => t);
    if (layerArr.length === 0) {
      break
    } else {
      target.push(layerArr.map(t => t.val));
      queue = layerArr;
    }
  }

  return target;
};
// @lc code=end


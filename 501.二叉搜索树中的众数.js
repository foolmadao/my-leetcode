/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function(root) {
  const timesObj = {};
  let targetList = []
  let max = 0;
  const checkNode = (node) => {
    if(!node) return;
    if(timesObj[node.val]) {
      timesObj[node.val] ++;
    } else {
      timesObj[node.val] = 1
    }

    checkNode(node.left);
    checkNode(node.right);
  }
  checkNode(root);
  Object.keys(timesObj).map(key => {
    if (timesObj[key] > max) {
      max = timesObj[key];
      targetList = [key];
    } else if (timesObj[key] === max) {
      targetList.push(key)
    }
  })

  return targetList
};
// @lc code=end


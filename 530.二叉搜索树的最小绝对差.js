/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
  if(!root) return 0
  let result = Infinity
  let curValue;
  let preValue;
  const preSearch = (node) => {

    if(node.left) preSearch(node.left)
    curValue = node.val;
    
    if(preValue !== undefined) {
      result = result > curValue - preValue ? curValue - preValue : result;
    }
    preValue = curValue;
    if(node.right) preSearch(node.right)
  }

  preSearch(root);

  return result;
};
// @lc code=end


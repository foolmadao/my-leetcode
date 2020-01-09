/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return getMidNode(nums)
};

var getMidNode = function(nums) {
  const len = nums.length
  if(!len) return null;
  const start = 0;
  const end = len - 1;
  if(start > end) return null
  const mid = start + end >> 1;
  const root = new TreeNode(nums[mid]);

  root.left = getMidNode(nums.slice(0,mid));
  root.right = getMidNode(nums.slice(mid+1));

  return root;
}
// @lc code=end


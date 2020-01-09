/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
  const stack = [];
  let pre = null;
  let node = root;
  while(node !== null || stack.length !== 0) {
    while(node !== null) {
      stack.push(node);
      node = node.left;
    }
    let cur = stack.pop()
    if(pre !== null && cur.val <= pre) {
      return false;
    }

    pre = cur.val
    node = cur.right
    
  }

  return true
};
// @lc code=end

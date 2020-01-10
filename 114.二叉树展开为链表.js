/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(root) {
    let newList = new TreeNode(root.val)
    let cur = newList
    const findNext = (node) => {
      if(!node) return;
      cur.right = new TreeNode(node.val);
      cur.left = null;
      cur = cur.right
      findNext(node.left);
      findNext(node.right);
    }
  
    findNext(root.left);
    findNext(root.right);
    
    root.right = newList.right;
    root.left = null;
  }
};
// @lc code=end


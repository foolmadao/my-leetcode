/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(!root) return [];
  const pathList = [];
  const findLeaf = (node, path) => {
    if(!node.left && !node.right) {
      pathList.push(path);
    } else {
      if(node.left) findLeaf(node.left, path + '->' + node.left.val)
      if(node.right) findLeaf(node.right, path + '->' + node.right.val)
    }
  }

  findLeaf(root, root.val + '')

  return pathList;
};
// @lc code=end


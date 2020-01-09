/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const findNext = (node, p, q) => {
    if(node.val > p.val && node.val> q.val) {
      return findNext(node.left, p, q)
    } else if(node.val < p.val && node.val < q.val) {
      return findNext(node.right, p, q)
    } else {
      return node
    }
  }

  return findNext(root, p, q);
};
// @lc code=end


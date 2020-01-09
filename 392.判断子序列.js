/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const tLen = t.length;
  const sLen = s.length;

  let sIndex = 0;

  for(let i=0; i < tLen; i++) {
    if (t[i] === s[sIndex]) sIndex ++;
  }

  return sIndex === sLen;
};
// @lc code=end


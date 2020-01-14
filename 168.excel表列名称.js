/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let a = n;
  let str = '';
  while(a > 26) {
    const t = a % 26;
    a = Math.floor((a - 1) / 26);
    if(t) {
      str = String.fromCharCode(64 + t) + str;
    } else {
      str = 'Z' + str
    }
  }
  
  str = String.fromCharCode(64 + a) + str;
  return str;
};
// @lc code=end


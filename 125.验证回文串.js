/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let list = s.split('');
  let isBack = true
  let p =/[A-Za-z0-9]/i
  
  list = list.filter(t => p.test(t));
  const len = list.length
  const half = parseInt(len/2)
  let index = 0;

  while(index < half) {
    if (list[index].toUpperCase() !== list[len-index-1].toUpperCase()) {
      isBack = false;
      break;
    }
    index ++
  }

  return isBack;
};
// @lc code=end


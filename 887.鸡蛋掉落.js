/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  let count = 1;
  const dp = (i, k) => {
    return (i === 1 || k === 1) ? i : dp(i - 1, k - 1) + dp(i - 1, k) + 1;
  }

  while(dp(count,K)<N) {
    count ++;
  }

  return count
};
// @lc code=end


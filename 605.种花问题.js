/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;

  flowerbed.map((t,i) => {
    if (!t && !flowerbed[i-1] && !flowerbed[i+1]) {
      count ++;
      flowerbed[i] = 1
    }
  })

  return count >= n;
};
// @lc code=end


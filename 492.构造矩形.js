/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let l = Math.ceil(area ** 0.5)

  while(area % l !== 0) {
    l++
  }

  return [l, area/l]
};
// @lc code=end


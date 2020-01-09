/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  let radius = 0;

  for (let index = 0; index < houses.length; index++) {
    let cur = Infinity;

    for (let i = 0; i < heaters.length; i++) {
      const a = Math.abs(heaters[i]-houses[index])
      cur = a > cur ? cur : a;
    }
    
    radius = radius > cur ? radius : cur
  }

  return radius;

};
// @lc code=end


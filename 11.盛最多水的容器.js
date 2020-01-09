/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxValue = 0;
  const len = height.length;
  height.forEach((item, index) => {
    let value = 0;
    for (let i = len - 1; i > index; i--) {
      if (item <= height[i]) {
        value = Math.max(value, item * (i - index))
        break;
      } else {
        value = Math.max(value, height[i] * (i - index))
      }
    }
    maxValue = Math.max(maxValue, value)
  })

  return maxValue;
};


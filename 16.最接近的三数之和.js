/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const targetArr = nums.sort((a,b) => a-b);
  let targetList = [];

  let targetNum = Infinity;

  for (let i = 0; i < targetArr.length - 2; i++) {
    for (let j = i + 1; j < targetArr.length - 1; j++) {
      for (let k = j + 1; k < targetArr.length; k++) {
        if(targetArr[i] + targetArr[j] + targetArr[k] >= target) {
          targetList.push(targetArr[i] + targetArr[j] + targetArr[k] - target);
          if(k > j+1) {
            targetList.push(targetArr[i] + targetArr[j] + targetArr[k-1] - target)
          }

          k = targetArr.length
        } else if (k === targetArr.length - 1) {
          targetList.push(targetArr[i] + targetArr[j] + targetArr[k] - target)
        }
      }
    }
  }
  targetList.map(t => {
    targetNum = Math.abs(t) < Math.abs(targetNum) ? t : targetNum;
  })
  return target + targetNum
};
// @lc code=end


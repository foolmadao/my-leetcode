/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const gemList = J.split('');
  const stoneList = S.split('');
  let count = 0;

  for (let i = 0; i < gemList.length; i++) {
    for (let j = 0; j < stoneList.length; j++) {
      if(stoneList[j] === gemList[i]) count ++;
    }
  }

  return count
};
// @lc code=end


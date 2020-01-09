/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let res = 0;
  while(n >= 5) {
    res += parseInt(n/5);
    n = parseInt(n/5);
  }
  return res;
};


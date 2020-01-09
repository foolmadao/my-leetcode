/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if(n === 0) return false;
  const i = Math.log10(n)/Math.log10(2)
  return i === parseInt(i);
};


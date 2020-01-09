/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 0) return false;
    if (n === 1) return true;
    const i = Math.log10(n)/Math.log10(3) 
    return i === Math.floor(i);
};


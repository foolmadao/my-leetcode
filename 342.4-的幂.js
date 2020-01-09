/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num === 0) return false;
    const i = Math.log10(num)/Math.log10(4)
    return i === parseInt(i);
};


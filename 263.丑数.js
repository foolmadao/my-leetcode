/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if(num === 0) return false;
  const findPrime = (num) => {
    if(num === 1) return true;
    if(num % 2 === 0) return findPrime(num/2);
    if(num % 3 === 0) return findPrime(num/3);
    if(num % 5 === 0) return findPrime(num/5);

    return false;
  }

  return findPrime(num)
};


/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const onStep = (n) => {
    let sum = 0;
    while(n > 0) {
      const bit = n % 10;
      sum += bit * bit;
      n = Math.floor(n/10);
    }

    return sum;
  }

  let slow = n;
  let fast = onStep(n);

  while(slow !== fast) {
    slow = onStep(slow)
    fast = onStep(fast)
    fast = onStep(fast)
  }

  return slow === 1;
};


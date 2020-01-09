/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const num1Arr = num1.split('').reverse();
  const num2Arr = num2.split('').reverse();
  let len = Math.max(num1Arr.length, num2Arr.length)
  let isCarry = false;

  const targetArr = [];

  for (let index = 0; index < len; index++) {
    const a = num1Arr[index] ? +num1Arr[index] : 0;
    const b = num2Arr[index] ? +num2Arr[index] : 0;
    let total = isCarry ? a + b + 1 : a + b;
    if(total > 9) {
      total = total - 10;
      isCarry = true
    } else {
      isCarry = false
    }
    targetArr.push(total)
  }

  if (isCarry) targetArr.push(1)

  return targetArr.reverse().join('');

};
// @lc code=end


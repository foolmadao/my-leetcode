/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const resArr = [];
  for (let index = 1; index < n + 1; index++) {
    index % 15 === 0 ? resArr.push("FizzBuzz") :
      index % 5 === 0 ? resArr.push("Buzz"):
        index % 3 === 0 ? resArr.push("Fizz"):
          resArr.push("" + index);
  }

  return resArr;
};


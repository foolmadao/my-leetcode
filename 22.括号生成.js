/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
   const traceBack = (str, arr, len, num) => {
     if (str.length === len && num === 0) {
       arr.push(str);
       return;
     }

     if((str.length === len && num !== 0) || num < 0) {
       return;
     }

     const num1 = num + 1;
     const num2 = num - 1;
     traceBack(str + '(', arr, len, num1);
     traceBack(str + ')', arr, len, num2);
   }
   const strArr = [];

   traceBack('', strArr, n*2, 0);

   return strArr;
};
// @lc code=end


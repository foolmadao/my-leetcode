/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const len = s.length;
  const obj = {};
  for (let index = 0; index < len; index++) {
    if (obj[s[index]]) {
      obj[s[index]] ++;
    } else {
      obj[s[index]] = 1;
    }
  }

  for (let index = 0; index < len + 1; index++) {
    if (obj[t[index]]) {
      obj[t[index]] --;
    } else {
      return t[index];
    }
    
  }
};
// @lc code=end


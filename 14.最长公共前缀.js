/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const length = strs.length;
  let str = '';
  let currentStr = '';
  let num = 0;
  let isEnd = !strs.length
  const round = () => {
    for (let index = 0; index < length; index++) {
      if(index === 0) currentStr = strs[index][num];
      if(currentStr === undefined) {
        isEnd = true
        break
      }
      if(strs[index][num] !== currentStr) {
        isEnd = true
        break
      };
      if(index === length - 1) {
        str += currentStr;
        num++
      }
    }
  }
  while(!isEnd) {
    round()
  }
  return str
};


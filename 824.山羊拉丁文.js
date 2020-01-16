/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  let strList = S.split(' ');
  const tail = 'a';
  const testList = ['a', 'A', 'E', 'e', 'i', 'I', 'O', 'o', 'u', 'U']
  strList = strList.map((t,i) => {
    if(testList.includes(t[0])) {
      return t = t + 'ma' + tail.repeat(i+1)
    } else {
      return t = t.substr(1) + t[0] + 'ma' + tail.repeat(i+1)
    }
  })

  return strList.join(' ')

};
// @lc code=end


/*
 * @lc app=leetcode.cn id=781 lang=javascript
 *
 * [781] 森林中的兔子
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  if(!answers.length) return 0;
  const infoObj = {};

  let total = 0;

  answers.map(t => {
    if(infoObj[t]) {
      infoObj[t]++;
    } else {
      infoObj[t] = 1;
    }
  })

  Object.keys(infoObj).map(t => {
    if(t !== '0') {
      if(infoObj[t] > 1) {
        total += Math.ceil(infoObj[t] / (+t + 1)) * (+t + 1)
      } else {
        total += +t + 1
      }

    } else {
      total += infoObj[t]
    }
    
  })

  return total
};
// @lc code=end


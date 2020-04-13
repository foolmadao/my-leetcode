/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const travelArr = (arr) => {
    const result = [];
    if(!arr.length) return [];
    arr.map((t,i) => {
      const children = travelArr(arr.slice(0,i).concat(arr.slice(i+1)))

      if(children.length) {
        children.map(item => {
          result.push([t, ...item])
        })
      } else {
        result.push([t])
      }
      
    })
    return result
  }
  const obj = {};
  travelArr(nums).map(item => {
    if(!obj[item.join('-')]) {
      obj[item.join('-')] = 1
    }
  })

  return Object.keys(obj).map(item => {
    return item.split('-').map(t => +t)
  })
};
// @lc code=end


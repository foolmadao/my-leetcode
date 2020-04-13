/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

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

  return travelArr(nums)
   
};
// @lc code=end


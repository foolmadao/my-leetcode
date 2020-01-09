/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const targetList = [];
  const findNextLeaf = (nums, target) => {
    const before = nums[nums.length - 1]
    candidates.forEach(item => {
      if(before <= item) {
        const newNum = target - item;
        if(newNum === 0) {
          targetList.push([...nums, item])
        } else if(newNum > 0) {
          findNextLeaf([...nums, item], newNum)
        }
      }
    })
  }

  candidates.forEach(item => {
    if(target - item > 0) {
      findNextLeaf([item], target - item)
    } else if(target - item === 0) {
      targetList.push([item])
    }
    
  })

  return targetList;
};


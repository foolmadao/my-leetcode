/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((arr1, arr2) => arr1[0]-arr2[0]);
    const targetArr = [];
    intervals.forEach((arr,index) => {
      if(index) {
        if(arr[0] <= intervals[index-1][1]) {
          arr[0] = intervals[index-1][0];
          arr[1] = Math.max(intervals[index-1][1], arr[1])
        } else {
          targetArr.push(intervals[index-1]);
        }
      }
      if(index === intervals.length-1) targetArr.push(arr)
    })
    return targetArr;
};


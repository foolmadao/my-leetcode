/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length == 0) return 0;
  const lastIndex = prices.length-1;
  const cache = {}
  const findMax = (i, type) => {
    if(cache[i+'-'+type]) {
      return cache[i+'-'+type]
    }
    if(i===0) {
      switch(type){
        case 'hold':
          return -prices[0];
        case 'unhold':
          return 0;
        case 'freeze':
          return 0;
        case 'sale':
          return 0;
      }
    } else if (type === 'hold') {
      cache[i+'-'+type] = Math.max(findMax(i-1, 'hold'), findMax(i-1, 'unhold') - prices[i], findMax(i-1, 'freeze') - prices[i])
    } else if (type === 'unhold') {
      cache[i+'-'+type] = Math.max(findMax(i-1, 'unhold'), findMax(i-1, 'freeze'))
    } else if (type === 'freeze') {
      cache[i+'-'+type] = findMax(i-1, 'sale')
    } else if (type === 'sale') {
      cache[i+'-'+type] = findMax(i-1, 'hold') + prices[i]
    }

    return cache[i+'-'+type]
  }

  return Math.max(findMax(lastIndex, 'unhold'), findMax(lastIndex, 'freeze'), findMax(lastIndex, 'sale') )

};


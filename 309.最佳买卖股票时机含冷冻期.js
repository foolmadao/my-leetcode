/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 * 
 * 
 * 
 * 股票四种状态： 'hold'， 'unhold'，'freeze'，'sale'
 * 
 * 
 * 交易天数 i
 * 
 * 
 * 价格list prices[]
 * 
 * 
 * 
 * 
 * 状态转移方程 dp(i, 'hold') = Math.max(dp(i-1, 'hold'), dp(i-1, 'unhold') - prices[i], dp(i-1, 'freeze') - prices[i])
 * 
 *             dp(i, 'unhold') = Math.max(dp(i-1, 'unhold'), dp(i-1, 'freeze'))
 * 
 *             dp(i, 'freeze') = dp(i-1, 'sale')
 * 
 *             dp(i, 'sale') = dp(i-1, 'hold')
 * 
 * 
 * 
 * 
 * 
 *
 * 边界条件 dp(0, 'hold') = -prices[0]
 *         dp(0, 'unhold') = 0
 *         dp(0, 'freeze') = 0
 *         dp(0, 'sale') = 0
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


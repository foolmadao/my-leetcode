/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  const sercetList = secret.split('');
  const guessList = guess.split('');
  let bulls = 0;
  let cows = 0;
  for (let index = 0; index < guessList.length; index++) {
    const element = guessList[index];
    if (element === sercetList[index]) {
      bulls ++;
      sercetList.splice(index, 1);
      guessList.splice(index, 1);
      index --
    }
  }


  for (let index = 0; index < guessList.length; index++) {
    const element = guessList[index];
    const i = sercetList.findIndex(t => t === element)
    if ( i !== -1) {
      cows++
      sercetList.splice(i,1);
      guessList.splice(index,1);
      index--
    }
  }

  return `${bulls}A${cows}B`
};
// @lc code=end


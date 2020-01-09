/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const res = [1];
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;

  while(n > 1) {
    const nextTarget = Math.min(res[p2]*2, res[p3]*3, res[p5]*5);
    res.push(nextTarget);

    if(nextTarget === res[p2]*2) p2++;
    if(nextTarget === res[p3]*3) p3++;
    if(nextTarget === res[p5]*5) p5++;

    n--
  }

  return res.pop();
};


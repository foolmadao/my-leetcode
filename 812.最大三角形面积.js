/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  let maxAera = 0;

  const getLength = (p1, p2) => {
    return ((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2) ** 0.5
  }

  const getArea = (p1,p2,p3) => {
    const l1 = getLength(p1, p2);
    const l2 = getLength(p1, p3);
    const l3 = getLength(p2, p3);
    const ph = (l1 + l2 + l3) /2
    return (ph * (ph - l1) * (ph - l2) * (ph - l3)) ** 0.5;
  }

  for (let i = 0; i < points.length - 2; i++) {
    for (let j = 0; j < points.length - 1; j++) {
      for (let k = 0; k < points.length; k++) {
        const curArea = getArea(points[i], points[j], points[k])
        maxAera = curArea > maxAera ? curArea : maxAera;
      }
    }
  }

  return maxAera;
};
// @lc code=end


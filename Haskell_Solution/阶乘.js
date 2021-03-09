/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  n > 0 && (n += sumNums(n - 1)) > 0;
  return n;
};

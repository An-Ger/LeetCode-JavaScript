// 重复叠加字符串匹配
// 给定两个字符串 a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。

// 注意：字符串 "abc" 重复叠加 0 次是 ""，重复叠加 1 次是 "abc"，重复叠加 2 次是 "abcabc"。

// 示例 1：

// 输入：a = "abcd", b = "cdabcdab"
// 输出：3
// 解释：a 重复叠加三遍后为 "abcdabcdabcd", 此时 b 是其子串。
// 示例 2：

// 输入：a = "a", b = "aa"
// 输出：2
// 示例 3：

// 输入：a = "a", b = "a"
// 输出：1
// 示例 4：

// 输入：a = "abc", b = "wxyz"
// 输出：-1
//

// 提示
// 1 <= a.length <= 104
// 1 <= b.length <= 104
// a 和 b 由小写英文字母组成

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  const aLen = a.length,
    bLen = b.length;
  const len = Math.ceil(bLen / aLen) + 1;
  let c = "";
  for (let i = 0; i < len; i++) {
    c += a;
    if (i > len - 3) {
      if (c.includes(b)) return i + 1;
    }
  }
  return -1;
};

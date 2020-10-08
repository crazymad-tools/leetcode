/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  // let res = s.substring(0, 1);
  let left = 0;
  let right = 0;
  let maxn = 1;

  for (let i = 1; i < s.length; i++) {
    for (let k = 0; i - k >= 0 && i + k < s.length; k++) {
      if (s[i - k] === s[i + k]) {
        let len = k * 2 + 1;
        if (len > maxn) {
          left = i - k;
          right = i + k;
          maxn = len;
        }
      } else {
        break;
      }
    }
    if (s[i] === s[i - 1]) {
      for (let k = 0; i - k - 1 >= 0 && i + k < s.length; k++) {
        if (s[i - k - 1] === s[i + k]) {
          let len = k * 2 + 2;
          if (len > maxn) {
            left = i - k - 1;
            right = i + k;
            maxn = len;
          }
        } else {
          break;
        }
      }
    }
  }

  return s.substring(left, right + 1);

};

console.log(longestPalindrome('cbbd'));
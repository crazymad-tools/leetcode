/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let cs = {};
    let maxn = 0;
    let begin = 0;
    let i = 0;
    for (let len = s.length; i < len; i++) {
        let c = s.substring(i, i + 1);
        // console.log(c, cs[c]);
        if (cs[c] !== undefined && cs[c] >= begin) {
            maxn = Math.max(maxn, i - begin);
            begin = cs[c] + 1;
        }
        cs[c] = i;
    }
    maxn = Math.max(i - begin, maxn);

    return maxn;
};

console.log(lengthOfLongestSubstring('abcabcbb'));

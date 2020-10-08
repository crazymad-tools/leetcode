/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;

    lines = new Array(numRows).fill("");
    let idx = 0;
    let addon = 1;
    for (let i = 0; i < s.length; i++) {
        // console.log(idx);
        lines[idx] += s[i];
        idx += addon;
        if (idx > numRows - 1) {
            addon = -1;
            idx += addon * 2;
        } else if (idx < 0) {
            addon = 1;
            idx += addon * 2;
        }
    }

    // console.log(lines);
    return lines.reduce((prev, curr) => prev + curr, "");

};

console.log(convert('LEETCODEISHIRING', 4))
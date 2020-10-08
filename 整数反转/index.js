/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let minus = x < 0;
    let str = Number(x).toString().replace('-', '').split('').reverse().join('');
    if (str.length > 1) {
        str = str.replace(/^[0]*/, '')
    }

    let maxn = (Math.pow(2, 31) - 1).toString();
    let minn = (Math.pow(2, 31)).toString();
    if (minus) {
        if (str > minn && str.length >= minn.length) return 0;

        return '-' + str;
    } else {
        if (str > maxn && str.length >= maxn.length) return 0;

        return str;
    }

};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(0));
console.log(reverse(120));
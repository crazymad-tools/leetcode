/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let mid = Math.ceil((nums2.length + nums1.length) / 2);
    let x = 0;
    let y = 0;
    let last = 0;
    let current = 0;
    for (let i = 0; i <= mid; i++) {
        last = current;
        if (x === nums1.length) {
            current = nums2[y++];
        } else if (y === nums2.length) {
            current = nums1[x++];
        } else if (nums1[x] < nums2[y]) {
            current = nums1[x++];
        } else {
            current = nums2[y++];
        }
    }

    if ((nums1.length + nums2.length) % 2 === 0) {
        return (last + current) / 2;
    } else {
        return last;
    }
};

console.log(findMedianSortedArrays([1, 2], [2, 4, 4]))

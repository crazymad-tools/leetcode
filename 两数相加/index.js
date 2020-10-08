/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, carry) {

    function add(a, b) {
        a = a ? a.val : 0;
        b = b ? b.val : 0;
        return a + b;
    }

    let addon = add(l1, l2) + (carry ? carry : 0);
    let next = null;
    carry = Math.floor(addon / 10);
    if (l1 && l1.next || l2 && l2.next || carry) {
        next = addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, carry);
    }
    let node = {
        val: addon % 10,
        next: next
    }

    return node;
};

// let a = {
//     val: 2,
//     next: {
//         val: 4,
//         next: {
//             val: 3
//         }
//     }
// }

// let b = {
//     val: 5,
//     next: {
//         val: 6,
//         next: {
//             val: 4
//         }
//     }
// }
// let a = {
//     val: 5,
//     next: null,
// }

console.log(addTwoNumbers(a, b));
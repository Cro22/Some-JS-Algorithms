/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    const first = [];
    const second = [];

    const search = function (ListNode, arr) {
        if (typeof ListNode.val === "number") {
            if (arr) {
                first.push(ListNode.val)
                if (ListNode.next) {
                    search(ListNode.next, arr)
                }
            }
            if (!arr) {
                second.push(ListNode.val)
                if (ListNode.next) {
                    search(ListNode.next, arr)
                }
            }
        }
    }
    const add = function (node, value) {
        if (node && typeof value === 'string') {
            if (node.next) {
                add(node.next, value)
            } else {
                node.next = new ListNode(value)
            }
        } else {
            node.val = value;
        }
    };
    search(l1, true);
    search(l2, false);
    const result = (BigInt (first.reverse().join('')) + BigInt (second.reverse().join(''))).toString()
    let resultSum = null;
    for (let i = result.length - 1; i >= 0; i--) {
        if (i === result.length - 1) {
            resultSum = new ListNode(result[i])
        } else {
            add(resultSum, result[i])
        }
    }
    return resultSum;
};


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
l2 = new ListNode(5, new ListNode(0, new ListNode(4)))
console.log(addTwoNumbers(l1, l2))
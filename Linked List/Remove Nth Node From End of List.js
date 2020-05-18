/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    const node = [];
    const add = function (node, value) {
        if (node && typeof value === 'number') {
            if (node.next) {
                add(node.next, value)
            } else {
                node.next = new ListNode(value)
            }
        } else {
            node.val = value;
        }
    };
    const search = function (ListNode) {
        if (typeof ListNode.val === "number") {
            node.push(ListNode.val)
            if (ListNode.next) {
                search(ListNode.next)
            }
        }
    };
    search(head);
    node.splice(node.length - n, 1);

    let resultSum = null;
    for (let i = 0; i < node.length; i++) {
        if (i === 0) {
            resultSum = new ListNode(node[i])
        } else {
            add(resultSum, node[i])
        }
    }
    return resultSum;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

console.log(removeNthFromEnd(l1, 2))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd2 = function (head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let first = dummy;
    let second = dummy;

    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    while (first != null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;


};